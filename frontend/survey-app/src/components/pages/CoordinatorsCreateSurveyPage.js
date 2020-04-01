import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';

function CoordinatorsCreateSurveyPage() {
  return (
    <div>
      <form>
        <Button id="button-create-new-survey-text" variant="btn btn-success" onClick={() => history.push('/signup')}>CREATE NEW SURVEY</Button>
      {/*<button id="button-get-started-text" type="button" className="btn btn-primary" onClick={() => history.push('/login')}>GET STARTED</button>*/}
      </form>
     <h1>CREATE SURVEY PAGE</h1>

      <Ellipse />
    </div>
  );
}

export default CoordinatorsCreateSurveyPage;
