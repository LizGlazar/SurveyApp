import React, {useState, useEffect} from 'react';
//import './Assets/css/surveyapp.css';
import Nav from '../../Nav.js';
import Ellipse from '../ellipseComponent/ellipse';
function Contact() {
  return (
    <div className="parent-container">
    <div id="landing-page-background">
    <p id="landing-page-logo">SurveyApp</p>
      {/*<Nav />*/}
      <Ellipse />

      <div className="contact-page-container">
        <p id="contact-item">Elżbieta Glazar <br /><a href="mailto: elzbieta.glazar@gmail.com">elzbieta.glazar@gmail.com</a></p>
        {/*<p id="contact-item">Bartosz Suchocki <br /><a href="mailto: bartosz.suchocki@gmail.com"> bartosz.suchocki@gmail.com</a></p>
        <p id="contact-item">Andrzej Szelemetko <br /><a href="mailto: andrzej.szelemetko@gmail.com"> andrzej.szelemetko@gmail.com</a></p>*/}
      </div>

    
    </div>
    </div>
  );
}

export default Contact;
