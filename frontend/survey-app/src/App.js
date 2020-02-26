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
      <button id="button-get-started-text" type="button" className="btn btn-primary">GET STARTED</button>
      <svg id="ellipse-1">
        <circle cx="171" cy="171" r="171" style={{fill:"#E5E5E5", fillOpacity:0.1}} />
      </svg>


background: rgba(229, 229, 229, 0.1);
}

      {/*<Header />

        <Homepage />

      <Footer />*/}
      
    </div>
  );
}

export default App;
