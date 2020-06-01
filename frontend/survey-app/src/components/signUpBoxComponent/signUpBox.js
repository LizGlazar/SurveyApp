import React from 'react';

class SignUpBox extends React.Component {

    /*constructor(props) {
      super(props);
      this.state = {};
    }*/
  
    submitSignUp(e) {}
  
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
              <label htmlFor="username">Name:</label> {/* email is used as username*/}
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Sam Sung"/>
            </div>
  
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

            <div className="input-group">
              <div>
              <input 
                            type="radio" id="coordinator" name="role" value="coordinator" checked
                            /*className="button-trash-can-delete-question" value={answer.answerText}
                            checked={this.state.filledSurvey.answers[questionIndex].answer === answer.answerText}
                            onChange={e => this.onValueChange(questionIndex, answer.answerText)}*/
                            />
            <label for="coordinator">I'm a Coordinator</label>
            </div>
            <div>
            <input 
                            type="radio" id="respondent" name="role" value="respondent"
                            /*className="button-trash-can-delete-question" value={answer.answerText}
                            checked={this.state.filledSurvey.answers[questionIndex].answer === answer.answerText}
                            onChange={e => this.onValueChange(questionIndex, answer.answerText)}*/
                            />
            <label for="respondent">I'm a Respondent</label>
            </div>
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitSignUp
              .bind(this)}>Sign Up</button>
          </div>
        </div>
        </div>
        {/*</div>
        </div>*/}
        </div>
      );
    }
  
  };
  export default SignUpBox;