import React from 'react';
import { Button } from 'reactstrap';
import history from '../../history';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CoordinatorsEditSurveyPage extends React.Component {

  state = {
    startDate: new Date(),
    endDate: new Date(),
    survey: {
      name: '',
      startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10),
      questions: []
    }
  };

  componentDidMount(){

    const id = this.props.match.params.id;

    fetch('http://localhost:8080/surveys/' + id, {credentials: 'include'})
    .then(result => result.json())
    .then(
      (result) => {
          console.log('Successfully fetched survey ' + JSON.stringify(result));
          let newState = Object.assign({}, this.state);
          newState.survey = result;
          newState.startDate = new Date(Date.parse(newState.survey.startDate));
          newState.endDate = new Date(Date.parse(newState.survey.endDate));
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
      let answers = newState.survey.questions[questionIndex].answers;
      for (let i = 0; i < answers.length; i++) {
        answers[i].number = i;
      }
      this.setState(newState);
    }
  }

  removeQuestion(questionIndex) {
    if (this.state.survey.questions.length > 1) {
      let newState = Object.assign({}, this.state);
      newState.survey.questions.splice(questionIndex,1);
      let questions = newState.survey.questions;
      for (let i = 0; i < questions.length; i++) {
        questions[i].number = i;
      }
      this.setState(newState);
    }
  }

  addQuestion() {
    let newState = Object.assign({}, this.state);
    let questionIndex = newState.survey.questions.length;
    let newQuestion = {
      number: questionIndex,
      questionText: "",
      answers: [{
        number: 0,
        answerText: ""
      }]
    };
    newState.survey.questions.push(newQuestion);
    this.setState(newState);
  }

  addAnswer(questionIndex) {    
    let newState = Object.assign({}, this.state);
    let answerIndex = newState.survey.questions[questionIndex].answers.length;
    let newAnswer = {
      number: answerIndex,
      answerText: ""
    };
    newState.survey.questions[questionIndex].answers.push(newAnswer);
    this.setState(newState);
  }

  setStartDate(startDate) {
    let newState = Object.assign({}, this.state);
    newState.startDate = startDate;
    newState.survey.startDate = startDate.toISOString().slice(0, 10);
    this.setState(newState);
  }

  setEndDate(endDate) {
    let newState = Object.assign({}, this.state);
    newState.endDate = endDate;
    newState.survey.endDate = endDate.toISOString().slice(0, 10);
    this.setState(newState);
  }

  setSurveyName(surveyName) {
    let newState = Object.assign({}, this.state);
    newState.survey.name = surveyName;
    this.setState(newState);
  }

  updateSurvey(published) {
    let newState = Object.assign({}, this.state);
    newState.survey.published = published;
    
    fetch('http://localhost:8080/surveys/' + this.state.survey.id, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(newState.survey),
      credentials: 'include'
    })
    .then(
      (result) => {
          console.log('Successfully updated survey ' + result);
          history.push('/coordinators-survey-list');
      },
      (error) => {
          console.log('Failed to update survey' + error);
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
    newState.survey.questions[questionIndex].answers[answerIndex].answerText = answer;
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
                  <DatePicker className="input-create-survey-page-name" selected={this.state.startDate} onChange={date => this.setStartDate(date)} dateFormat="MMMM d, yyyy" selectsStart 
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}/>
                </div>
                <div className="input-group-create-survey-page">
                  <label>End date:</label>
                  <DatePicker className="input-create-survey-page-name" selected={this.state.endDate} onChange={date => this.setEndDate(date)} dateFormat="MMMM d, yyyy" selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  minDate={this.state.startDate} />
                </div>
              </div>
                {this.state.survey.questions.map((item, questionIndex) => (
                  <div className="input-group-create-survey-page">
                    <label>Question:</label>
                    <p></p>
                    <div className="button-trash-can-input-line">
                      <Button className="button-trash-can-delete-question" color="none" variant="btn btn-success" onClick={() => this.removeQuestion(questionIndex)}></Button>
                      <input
                        type="text"
                        className="input-create-survey-page-question"
                        value={item.questionText}
                        onChange={questionText => this.setQuestionText(questionText.target.value, questionIndex)}
                      />
                    </div>
                    <p></p>
                    <label>Answers:</label>
                    {item.answers.map((answer, answerIndex) => (
                      <div className="input-group-create-survey-page">
                        <div className="button-trash-can-input-line">
                          <Button className="button-trash-can-delete-question" color="none" variant="btn btn-success" onClick={() => this.removeAnswer(questionIndex, answerIndex)}></Button>
                          <input
                            type="text"
                            className="input-create-survey-page-answers"
                            value={answer.answerText}
                            onChange={answer => this.setAnswer(answer.target.value, questionIndex, answerIndex)}
                            />
                        </div>
                      </div>
                    ) 
                    )}
                    <div className="plus-button-line">
                      <Button className="button-plus" color="none" onClick={() => this.addAnswer(questionIndex)}></Button>
                    </div>
                  </div>
                ))
                }
                <div id="button-area-line">
                  <Button id="button-add-question" variant="btn btn-success" onClick={() => this.addQuestion()}>ADD QUESTION</Button>
                  <Button id="button-save-survey" variant="btn btn-success" onClick={() => this.updateSurvey(false)}>SAVE SURVEY</Button>
                  <Button id="button-publish-survey" variant="btn btn-success" onClick={() => this.updateSurvey(true)}>PUBLISH SURVEY</Button> {/*poprawić css*/}
                  <Button id="button-cancel" variant="btn btn-success" onClick={() => { if (window.confirm('Are you sure you wish to cancel editing?')) history.push('/coordinators-survey-list')}}>CANCEL</Button>
                </div>
        </form>

    </div>
    );
  }
  }

export default CoordinatorsEditSurveyPage;
