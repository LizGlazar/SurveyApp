import React from 'react';
import history from '../../history';

class SignUpBox extends React.Component {
    state = {
      isCoordinator: true
    }

    onValueChange(isCoordinator) {
      let newState = Object.assign({}, this.state);
      newState.isCoordinator = isCoordinator;
      this.setState(newState)
    }

    setName(nameEvent) {
      let name = nameEvent.target.value;
      let newState = Object.assign({}, this.state);
      newState.name = name;
      this.setState(newState);
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
  
    handleSubmit = e => {
      console.log('handleSubmit() Submit form with state:', this.state);
      e.preventDefault();
      
      fetch('http://localhost:8080/auth/signup', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(this.state),
        credentials: 'include'
      })
        .then(
          (result) => {
              if (result.status === 200) {
                console.log('Successfully created user');
                if (this.state.isCoordinator) {
                  history.push('/coordinators-create-survey-page');
                } else {
                  history.push('/respondents-survey-list-page');
                }
              } else {
                result.json()
                .then(errorResponse => {alert('Failed to create user. ' + errorResponse.message)});
              }
              
          },
          (error) => {
              console.log('Failed to create user' + error);
          }
      )
    
    }
    
    render() {
      return (
        
        <div className = "parent-container">
              <div className="box-container">
              
        <div className="inner-container">
          <form onSubmit={this.handleSubmit}>
          <div className="box">

            <div className="input-group">
              <label htmlFor="username">Name:</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Sam Sung"
                pattern="[a-zA-Z0-9]{3,15}"
                required
                value={this.state.name}
                onChange={name => this.setName(name)}
                />
            </div>
  
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

           <div id="role-selection">
            <div className="input-group">
              <div>
              <input 
                            type="radio" id="coordinator" name="role" value="coordinator" 
                            checked={this.state.isCoordinator}
                            onChange={e => this.onValueChange(true)}
                            />
            <label for="coordinator">&nbsp; I'm a Coordinator</label>
            </div>
            <div>
            <input 
                            type="radio" id="respondent" name="role" value="respondent"
                            checked={!this.state.isCoordinator}
                            onChange={e => this.onValueChange(false)}
                            />
            <label for="respondent">&nbsp; I'm a Respondent</label>
            </div>
            </div>
            </div>

            <button
              className="login-btn">Sign Up</button>

          </div>
          </form>
        </div>
        
        </div>     
        </div>
        
      );
    }
  
  };
  export default SignUpBox;