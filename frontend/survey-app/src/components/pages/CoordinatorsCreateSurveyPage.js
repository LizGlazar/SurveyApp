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

                <div className="button-area-line">
                <Button id="button-create-new-survey-text" variant="btn btn-success" onClick={() => history.push('/signup')}>CREATE NEW SURVEY</Button>
                </div>

      
      </form>
     

      <Ellipse />
    </div>
  );
}

export default CoordinatorsCreateSurveyPage;
