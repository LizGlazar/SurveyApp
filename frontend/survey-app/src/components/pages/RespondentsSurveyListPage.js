import React from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import RespondentsTable from '../tableComponent/respondentsTable';

function RespondentsSurveyListPage() {
  return (
    <div>
      {/*form>
      <button id="button-get-started-text" type="button" className="btn btn-primary" onClick={() => history.push('/login')}>GET STARTED</button>
      </form>*/}
    <p></p>
      <RespondentsTable />

      <Ellipse />
    </div>
  );
}

export default RespondentsSurveyListPage;
