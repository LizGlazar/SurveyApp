import React from 'react';

class SignUpBox extends React.Component {

    /*constructor(props) {
      super(props);
      this.state = {};
    }*/
  
    submitSignUp(e) {}
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Sign Up
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className="login-input" placeholder="Email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitSignUp
              .bind(this)}>Sign Up</button>
          </div>
        </div>
      );
    }
  }
  
