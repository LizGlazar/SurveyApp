import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';

function CoordinatorsCreateSurveyPage() {
  return (
    <div id="create-survey-page-container">
      <form>
            <div id="input-group-create-survey-page">
            
              <label>Survey Name:</label>
              <input
                type="text"
                id="input-create-survey-page-name"
                
                />
                </div>

              <div id="input-group-create-survey-page">
              <label>Question:</label>
              <input
                type="text"
                id="input-create-survey-page-question"
                
                />
                </div>

              <div id="input-group-create-survey-page">
              <label>Answers:</label>
              <input
                type="text"
                id="input-create-survey-page-answers"
                
                />
                
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

export default CoordinatorsCreateSurveyPage;
