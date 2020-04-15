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
    let newState = Object.assign({}, this.state);
    newState.survey.questions[questionIndex].answers.splice(answerIndex,1);
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
              {this.state.survey.questions.map((item, questionIndex) => (
                <div className="input-group-create-survey-page"> {/*gdy ten div był nad this.state  nie wyglądało to dobrze, probelm był z linią pytania*/}
                  <label>Question:</label>
                  <p></p> {/*maybe this can be improved*/}
                  <div className="button-trash-can-input-line">
                    <Button className="button-trash-can-delete-question" color="none" variant="btn btn-success" onClick={() => history.push('/signup')}></Button>
                    <input
                      type="text"
                      className="input-create-survey-page-question"
                      value={item.questionText}
                    />
                  </div>
                  {item.answers.map((answer, answerIndex) => (
                    <div className="input-group-create-survey-page">
                      <label>Answers:</label>
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
                </div>
              ))
              }
              <div id="plus-button-line">
                <Button id="button-plus" color="none" onClick={() => history.push('/signup')}></Button>
              </div>
              <div id="button-area-line">
                <Button id="button-add-question" variant="btn btn-success" onClick={() => history.push('/signup')}>ADD QUESTION</Button>
                <Button id="button-create-survey" variant="btn btn-success" onClick={() => history.push('/signup')}>CREATE SURVEY</Button>
                <Button id="button-cancel" variant="btn btn-success" onClick={() => history.push('/signup')}>CANCEL</Button>
              </div>
      </form>
    <Ellipse />
  </div>
  );
  }
}

export default CoordinatorsCreateSurveyPage;
