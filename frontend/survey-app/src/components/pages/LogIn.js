import React from 'react';
//import './Assets/css/surveyapp.css';
import Nav from '../../Nav.js';
import Ellipse from '../ellipseComponent/ellipse';
import LoginBox from '../loginBoxComponent/loginBox';

function LogIn() {
  return (
    <div className="parent-container">
    <div id="landing-page-background">
      <p id="landing-page-logo">SurveyApp</p>
      <Nav />
      <Ellipse />
      <div className="childLoginPage1"><LoginBox /></div>
      
      <div className="childLoginPage2">
        <p>Gather feedback to plan for future</p>
      </div>

    
    </div>
    </div>
  );
}

export default LogIn;
