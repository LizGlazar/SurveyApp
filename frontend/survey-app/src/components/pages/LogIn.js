import React from 'react';
//import './Assets/css/surveyapp.css';
import Nav from '../../Nav.js';
import Ellipse from '../ellipseComponent/ellipse';
import LoginBox from '../loginBoxComponent/loginBox';

function LogIn() {
  return (
    <div id="landing-page-background">
      <p id="landing-page-logo">SurveyApp</p>
      <Nav />
      <Ellipse />
      <LoginBox />
      
      <h1>Login Page</h1>

    
    </div>
  );
}

export default LogIn;
