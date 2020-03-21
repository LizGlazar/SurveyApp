import React from 'react';

class LoginBox extends React.Component {

    /*constructor(props) {
      super(props);
      this.state = {};
    }*/
  
    submitLogin(e) {}
  
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
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Email:</label> {/* email is used as username*/}
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="example@domain.com"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password:</label>
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
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
        </div>
        {/*</div>
        </div>*/}
        </div>
      );
    }
  
  };
  export default LoginBox;