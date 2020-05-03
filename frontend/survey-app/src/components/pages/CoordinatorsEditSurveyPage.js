import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CoordinatorsEditSurveyPage extends React.Component {

  state = {
    survey: {
      name: '',
      startDate: new Date(),
      endDate: new Date(),
      questions: []
    }
  };

  componentDidMount(){

    const id = this.props.match.params.id;

    fetch('http://localhost:8080/surveys/' + id)
    .then(result => result.json())
    .then(
      (result) => {
          console.log('Successfully fetched survey ' + JSON.stringify(result));
          let newState = Object.assign({}, this.state);
          newState.survey = result;
          newState.survey.startDate = Date.parse(newState.survey.startDate);
          newState.survey.endDate = Date.parse(newState.survey.endDate);
          this.setState(newState);
      },
      (error) => {
          console.log('Failed to fetch survey' + error);
      }
    )
  }

  
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

  setStartDate(startDate) {
    let newState = Object.assign({}, this.state);
    newState.survey.startDate = startDate;
    this.setState(newState);
  }

  setEndDate(endDate) {
    let newState = Object.assign({}, this.state);
    newState.survey.endDate = endDate;
    this.setState(newState);
  }

  setSurveyName(surveyName) {
    let newState = Object.assign({}, this.state);
    newState.survey.name = surveyName;
    this.setState(newState);
  }

  updateSurvey() {
    fetch('http://localhost:8080/surveys/' + this.state.survey.id, {method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.survey)})
    .then(
      (result) => {
          console.log('Successfully updated survey ' + result);
          history.push('/coordinators-survey-list');
      },
      (error) => {
          console.log('Failed to updated survey' + error);
      }
  )
  }

  setQuestionText(questionText, questionIndex) {
    let newState = Object.assign({}, this.state);
    newState.survey.questions[questionIndex].questionText = questionText;
    this.setState(newState);
  }

  setAnswer(answer, questionIndex, answerIndex) {
    let newState = Object.assign({}, this.state);
    newState.survey.questions[questionIndex].answers[answerIndex] = answer;
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
                  onChange={surveyName => this.setSurveyName(surveyName.target.value)}
                  />
              </div>
              <div className="input-group-date-line-container">
                <div className="input-group-create-survey-page">
                  <label id="label-start-date">Start date:</label>
                  <DatePicker className="input-create-survey-page-name" selected={this.state.survey.startDate} onChange={date => this.setStartDate(date)} />
                </div>
                <div className="input-group-create-survey-page">
                  <label>End date:</label>
                  <DatePicker className="input-create-survey-page-name" selected={this.state.survey.endDate} onChange={date => this.setEndDate(date)} />
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
                        onChange={questionText => this.setQuestionText(questionText.target.value, questionIndex)}
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
                            onChange={answer => this.setAnswer(answer.target.value, questionIndex, answerIndex)}
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
                  <Button id="button-save-survey" variant="btn btn-success" onClick={() => this.updateSurvey()}>SAVE SURVEY</Button>
                  <Button id="button-cancel" variant="btn btn-success" onClick={() => { if (window.confirm('Are you sure you wish to cancel editing?')) history.push('/coordinators-survey-list')}}>CANCEL</Button>
                </div>
        </form>
      <Ellipse />
    </div>
    );
  }
  }

export default CoordinatorsEditSurveyPage;
