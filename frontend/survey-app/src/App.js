import React from 'react';

//components
//import Header from './components/headerComponent/header';
//import Footer from './components/footerComponent/footer';
//import Homepage from './components/pages/homePage';

//includes
//import './Assets/css/default.min.css';
import './Assets/css/surveyapp.css';
function App() {
  return (
    <div id="landing-page-background">
      <p id="landing-page-text">Get The Feedback You Need</p>
      <p id="landing-page-logo">SurveyApp</p>
      <a id="button-login" href="#">LOG IN</a>
      <a id="button-sign-up" href="#">SIGN UP</a>
      <a id="button-about" href="#">ABOUT</a>
      <a id="button-contact" href="#">CONTACT</a>
      {/*<div id="button-get-started">
        <div id="button-get-started-rectangle">*/}
          <button id="button-get-started-text" type="button">GET STARTED</button>
        {/*</div>
      </div>*/}
      {/*<Header />

        <Homepage />

      <Footer />*/}
      
    </div>
  );
}

export default App;
