import React from 'react';
import Ellipse from '../ellipseComponent/ellipse';
function About() {
  return (
    <div className="parent-container">

    <div id="landing-page-background">
      <p id="landing-page-logo">SurveyApp</p>
      <Ellipse />
      <div className="about-section">
      
      <div>
        Surveys are a valuable part of any company's toolbox. They are useful for getting feedback from your customers on a variety of topics including application satisfaction, requirements, upcoming needs, issues, priorities, and just plain aggravations to name a few.
      </div>
      <p></p>
      <div id="new-paragraph">
        <span Style="color:#EB5757; font-size: 55px">Our Survey app gives you the opportunity to receive feedback from all angles. </span><br />It provides the ability to define a survey, allow users to respond within a predefined timeframe, and tablulate and present results.
      </div>
      </div>

    </div>
    </div>
  );
}

export default About;
