import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';

class CoordinatorsCreateSurveyPage extends React.Component {
  state = {
    survey: {
      name: 'Test Survey',
      questions: [
        {
          questionText:'Question 1',
          answers: ['Answer 1', 'Answer 2']
        },
        {
          questionText: 'Q2',
          answers: ['A1']
        }
      ]
    }
  };

  removeAnswer(questionIndex, answerIndex) {
    if (this.state.survey.questions[questionIndex].answers.length > 1) {
      let newState = Object.assign({}, this.state);
      newState.survey.questions[questionIndex].answers.splice(answerIndex,1);
      this.setState(newState);
    }
  }

  removeQuestion(questionIndex) {
    if (this.state.survey.questions.length > 1) {
      let newState = Object.assign({}, this.state);
      newState.survey.questions.splice(questionIndex,1);
      this.setState(newState);
    }
  }

  addQuestion() {
    let newState = Object.assign({}, this.state);
    let newQuestion = {
      questionText: "test question",
      answers: ["test answer"]
    };
    newState.survey.questions.push(newQuestion);
    this.setState(newState);
  }

  addAnswer(questionIndex) {    
    let newState = Object.assign({}, this.state);
    let newAnswer = "";
    newState.survey.questions[questionIndex].answers.push(newAnswer);
    this.setState(newState);

  }

  render(){
  return (
    <div className="create-survey-page-container">
      <form>
            <div className="input-group-create-survey-page">
              <label>Survey Name:</label>
              <input
                type="text"
                className="input-create-survey-page-name"
                value={this.state.survey.name}
                />
            </div>
            <div className="input-group-date-line-container">
              <div className="input-group-create-survey-page">
                <label id="label-start-date">Start date:</label>
                <input
                  type="text"
                  className="input-create-survey-page-name"
                  value={this.state.survey.name}
                  />
              </div>
              <div className="input-group-create-survey-page">
                <label>End date:</label>
                <input
                  type="text"
                  className="input-create-survey-page-name"
                  value={this.state.survey.name}
                  />
              </div>
            </div>
              {this.state.survey.questions.map((item, questionIndex) => (
                <div className="input-group-create-survey-page"> {/*gdy ten div był nad this.state  nie wyglądało to dobrze, probelm był z linią pytania*/}
                  <label>Question:</label>
                  <p></p> {/*maybe this can be improved*/}
                  <div className="button-trash-can-input-line">
                    <Button className="button-trash-can-delete-question" color="none" variant="btn btn-success" onClick={() => this.removeQuestion(questionIndex)}></Button>
                    <input
                      type="text"
                      className="input-create-survey-page-question"
                      value={item.questionText}
                    />
                  </div>
                  <p></p> {/*maybe this can be improved*/}
                  <label>Answers:</label>
                  {item.answers.map((answer, answerIndex) => (
                    <div className="input-group-create-survey-page">
                      <div className="button-trash-can-input-line">
                        <Button className="button-trash-can-delete-question" color="none" variant="btn btn-success" onClick={() => this.removeAnswer(questionIndex, answerIndex)}></Button>
                        <input
                          type="text"
                          className="input-create-survey-page-answers"
                          value={answer}
                          />
                      </div>
                    </div>
                  ) 
                  )}
                  <div id="plus-button-line">
                    <Button id="button-plus" color="none" onClick={() => this.addAnswer(questionIndex)}></Button>
                  </div>
                </div>
              ))
              }
              <div id="button-area-line">
                <Button id="button-add-question" variant="btn btn-success" onClick={() => this.addQuestion()}>ADD QUESTION</Button>
                <Button id="button-create-survey" variant="btn btn-success" onClick={() => history.push('/signup')}>CREATE SURVEY</Button>
                <Button id="button-cancel" variant="btn btn-success" onClick={() => { if (window.confirm('Are you sure you wish to cancel editing?')) history.push('/signup')}}>CANCEL</Button>
              </div>
      </form>
    <Ellipse />
  </div>
  );
  }
}

export default CoordinatorsCreateSurveyPage;
