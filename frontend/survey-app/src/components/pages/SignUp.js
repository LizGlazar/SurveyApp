import React from 'react';
import Ellipse from '../ellipseComponent/ellipse';
import SignUpBox from '../signUpBoxComponent/signUpBox';

function SignUp() {
    return (
      <div className="parent-container">
      <div id="landing-page-background">
        <p id="landing-page-logo">SurveyApp</p>
        <Ellipse />
        <div className="child1LoginPageLoginBox"><SignUpBox /></div>
        
        <div className="child2LoginPageHeadline">
          <p>Gather <span Style="color: #EB5757; font-size: 90px">feedback</span><br /> to plan for future</p>
        </div>
  
      
      </div>
      </div>
  );
}

export default SignUp;
