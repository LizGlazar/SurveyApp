import React from 'react';
import { Button } from 'reactstrap';
import history from '../../history';
import Nav from '../../Nav.js';
import Ellipse from '../ellipseComponent/ellipse';
function LandingPage() {
  return (
    <div>
      <p id="landing-page-text">Get The Feedback You Need</p>
      <p id="landing-page-logo">SurveyApp</p>
      <form>
        <Button id="button-get-started-text" variant="btn btn-success" onClick={() => history.push('/signup')}>GET STARTED</Button>
      {/*<button id="button-get-started-text" type="button" className="btn btn-primary" onClick={() => history.push('/login')}>GET STARTED</button>*/}
      </form>
      <Nav />
      <Ellipse />
    </div>
  );
}

export default LandingPage;

