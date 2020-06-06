import React from 'react';
import history from '../../history';

class LogOutBox extends React.Component {

    /*constructor(props) {
      super(props);
      this.state = {};
    }*/
    
    handleSubmit = e => {
      console.log('handleSubmit() Submit form with state:', this.state);
      e.preventDefault();
      fetch('http://localhost:8080/auth/login', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(this.state),
        credentials: 'include'
      })
        .then(
          (result) => {
              if (result.status === 200) {
                console.log('Successfully logged in user');
                result.json()
                .then(response => {
                  console.log(response);
                  localStorage.setItem('isCoordinator', response.isCoordinator);
                  localStorage.setItem('username', response.userName);
                  if (response.isCoordinator) {
                    history.push('/coordinators-create-survey-page');
                  } else {
                    history.push('/respondents-survey-list-page');
                  }
                })
                
              } else {
                result.json()
                .then(errorResponse => {alert('Failed to log in user. ' + errorResponse.message)});
              }
              
          },
          (error) => {
              console.log('Failed to log in user' + error);
          }
      )
    }

    render() {
      return (
        <div className = "parent-container">
{/*}       <div className="box-controller">
          <div className="controller selected-controller">*/}
              <div className="box-container">
        <div className="inner-container">
          {/*<div className="header">
            Login
          </div>*/}
          <form onSubmit={this.handleSubmit}>
          <div className="box">
            <button className="login-btn">Logout</button>
          </div>
          </form>
        </div>
        </div>
        {/*</div>
        </div>*/}
        </div>
      );
    }
  
  };
  export default LogOutBox;