import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';

function RespondentsSurveyPage() {
  return (
    <div>
      
     <h1 className='page-text'>Survey Name</h1>
     <p>
         Question
     </p>
     <p>
         Radio buttons (odpowiedź odznaczana)+ Possible answers 
     </p>
     <div id="respondents-survey-page-button-area-line">
     <Button id="respondents-survey-page-button-save" variant="btn btn-success" onClick={() => history.push('/signup')}>SAVE</Button>
     <Button id="respondents-survey-page-button-cancel" variant="btn btn-success" onClick={() => history.push('/signup')}>CANCEL</Button>
     </div>


      {/*<button id="button-get-started-text" type="button" className="btn btn-primary" onClick={() => history.push('/login')}>GET STARTED</button>*/}


      <Ellipse />
    </div>
  );
}

export default RespondentsSurveyPage;
