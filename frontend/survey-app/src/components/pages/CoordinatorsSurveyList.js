import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import Table from '../tableComponent/table';

function CoordinatorsSurveyList() {
  return (
    <div>
      <form>
        <Button id="button-create-new-survey-text" variant="btn btn-success" onClick={() => history.push('/coordinators-create-survey-page')}>CREATE NEW SURVEY</Button>
      {/*<button id="button-get-started-text" type="button" className="btn btn-primary" onClick={() => history.push('/login')}>GET STARTED</button>*/}
      </form>
      <Table />

      <Ellipse />
    </div>
  );
}

export default CoordinatorsSurveyList;
