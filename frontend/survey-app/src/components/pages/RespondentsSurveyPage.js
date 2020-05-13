import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class RespondentsSurveyPage extends React.Component {

  state = {
    survey: {
      name: '',
      startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10),
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
          this.setState(newState);
      },
      (error) => {
          console.log('Failed to fetch survey' + error);
      }
    )
  }

  /*TODO* inny url
    saveSurvey() {
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
  } */
  render(){
    return (
      <div className="create-survey-page-container">
        <form>
              <div className="input-group-create-survey-page">
                <label>Survey Name:</label>
                <p className="input-create-survey-page-name">{this.state.survey.name}</p>
              </div>
              <div className="input-group-date-line-container">
                <div className="input-group-create-survey-page">
                  <label id="label-start-date">Start date:</label>
                  <p className="input-create-survey-page-name"> {this.state.survey.startDate} </p>
                </div>
                <div className="input-group-create-survey-page">
                  <label>End date:</label>
                  <p className="input-create-survey-page-name"> {this.state.survey.endDate} </p>
                </div>
              </div>
                {this.state.survey.questions.map((item, questionIndex) => (
                  <div className="input-group-create-survey-page">
                    <label>Question:</label>
                    <p></p>
                      <p className="input-create-survey-page-question">{item.questionText}</p>
                    <p></p>
                    <label>Answers:</label>
                    {item.answers.map((answer, answerIndex) => (
                      <div className="input-group-create-survey-page">
                         <div className="button-trash-can-input-line"> 
                          <input 
                            type="radio" name={questionIndex} id={"" + questionIndex + "-" + answerIndex}
                            className="button-trash-can-delete-question" value={answer.answerText}/>
                            <label className="input-create-survey-page-answers"  for={"" + questionIndex + "-" + answerIndex}>{answer.answerText}</label>
                            </div>
                      </div>
                    ) 
                    )}
                  </div>
                ))
                }
                <div id="respondents-survey-page-button-area-line">
                  <Button id="respondents-survey-page-button-save" variant="btn btn-success" onClick={() => history.push('/signup')}>SAVE</Button>
                  <Button id="respondents-survey-page-button-cancel" variant="btn btn-success" onClick={() => history.push('/signup')}>CANCEL</Button>
                </div>

        </form>
      <Ellipse />
    </div>
    );
  }
}
export default RespondentsSurveyPage;
