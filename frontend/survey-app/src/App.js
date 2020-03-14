import React from 'react';

//components
//import Header from './components/headerComponent/header';
//import Ellipse from './components/ellipseComponent/ellipse';
//import Homepage from './components/pages/homePage';

//includes
//import './Assets/css/default.min.css';
import './Assets/css/surveyapp.css';
import Ellipse from './components/ellipseComponent/ellipse';
import Nav from './Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <div id="landing-page-background">
        <Nav />
        <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Ellipse />
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
