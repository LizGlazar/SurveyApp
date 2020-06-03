import React from 'react';
import history from '../../history';

class LoginBox extends React.Component {

    /*constructor(props) {
      super(props);
      this.state = {};
    }*/
    state = {
      isCoordinator: true
    }

    handleSubmit = e => {
      console.log('handleSubmit() Submit form with state:', this.state);
      e.preventDefault();
      fetch('http://localhost:8080/auth/login', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state)})
        .then(
          (result) => {
              if (result.status === 200) {
                console.log('Successfully logged in user');
                result.json()
                .then(response => {
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

    setEmail(email) {
      let newState = Object.assign({}, this.state);
      newState.email = email;
      this.setState(newState);
    }

    setPassword(passwordEvent) {
      let password = passwordEvent.target.value;
      let newState = Object.assign({}, this.state);
      newState.password = password;
      this.setState(newState);
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
  
          <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="login-input"
                placeholder="example@domain.com"
                required
                value={this.state.email}
                onChange={email => this.setEmail(email.target.value)}/>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                pattern="[a-zA-Z0-9]{3,15}"
                required
                value={this.state.password}
                onChange={password => this.setPassword(password)}/>
            </div>
  
            <button className="login-btn">Login</button>
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
  export default LoginBox;