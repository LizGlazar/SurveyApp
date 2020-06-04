import React from 'react';
//import './Assets/css/surveyapp.css';
import Nav from '../../Nav.js';
import Ellipse from '../ellipseComponent/ellipse';
import LoginBox from '../loginBoxComponent/loginBox';

function LogOut() {
  return (

    /*czyszczenie localstorage i wysyłanie do backendu logout*/
    <div className="parent-container">
    <div id="landing-page-background">
      <p id="landing-page-logo">SurveyApp</p>
      <Nav />
      <Ellipse />
      <div className="child1LoginPageLoginBox"><LoginBox /></div>
      
      <div className="child2LoginPageHeadline">
        <p>Gather <span Style="color: #EB5757; font-size: 90px">feedback</span><br /> to plan for future</p>
      </div>

    
    </div>
    </div>
  );
}

export default LogOut;