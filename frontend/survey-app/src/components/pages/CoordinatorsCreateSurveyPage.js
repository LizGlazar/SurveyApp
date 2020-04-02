import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';

function CoordinatorsCreateSurveyPage() {
  return (
    <div>
      <form>
        <h1 id="create-survey-page-text">Survey Name:</h1>


        /<Button id="button-create-new-survey-text" variant="btn btn-success" onClick={() => history.push('/signup')}>CREATE NEW SURVEY</Button>
      
      </form>
     

      <Ellipse />
    </div>
  );
}

export default CoordinatorsCreateSurveyPage;
