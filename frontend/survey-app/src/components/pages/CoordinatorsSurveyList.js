import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import CoordinatorsTable from '../tableComponent/coordinatorsTable';

function CoordinatorsSurveyList() {
  return (
    <div>
      <form>
      
       
      {/*<button id="button-get-started-text" type="button" className="btn btn-primary" onClick={() => history.push('/login')}>GET STARTED</button>*/}
    
      </form>
<p></p>
      <CoordinatorsTable />

      
    </div>
  );
}

export default CoordinatorsSurveyList;
