import React from 'react';
import Nav from '../../Nav.js';
import Ellipse from '../ellipseComponent/ellipse';
function LandingPage() {
  return (
    <div>
      <p id="landing-page-text">Get The Feedback You Need</p>
      <p id="landing-page-logo">SurveyApp</p>
      <button id="button-get-started-text" type="button" className="btn btn-primary" >GET STARTED</button>
      <Nav />
      <Ellipse />
    </div>
  );
}

export default LandingPage;
