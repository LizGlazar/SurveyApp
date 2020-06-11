import React from 'react';
import { Button } from 'reactstrap';
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
function LandingPage() {
  return (
    
      <div className="parent-container">
      <p id="landing-page-text">Get The Feedback You Need</p>
      <p id="landing-page-logo">SurveyApp</p>
      <form>
        <Button id="button-get-started-text" variant="btn btn-success" onClick={() => history.push('/signup')}>GET STARTED</Button>
      </form>
      <Ellipse />
    </div>
    
  );
}

export default LandingPage;

