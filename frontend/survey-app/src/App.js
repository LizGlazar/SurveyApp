import React from 'react';

//components
//import Header from './components/headerComponent/header';
//import Ellipse from './components/ellipseComponent/ellipse';
//import Homepage from './components/pages/homePage';

//includes
//import './Assets/css/default.min.css';
import './Assets/css/surveyapp.css';
import './Assets/css/loginSty.css';
import Ellipse from './components/ellipseComponent/ellipse';
import Nav from './Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import LogIn from './components/pages/LogIn';
import LoginBox from './components/loginBoxComponent/loginBox';
import SignUp from './components/pages/SignUp';
import history from './history';

function App() {
  
  /*constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    }

    <div className="box-controller">
    <div
      className={"controller " + (this.state.isLoginOpen
      ? "selected-controller"
      : "")}
      onClick={this
      .showLoginBox
      .bind(this)}>
      Login
    </div>
    <div
      className={"controller " + (this.state.isRegisterOpen
      ? "selected-controller"
      : "")}
      onClick={this
      .showRegisterBox
      .bind(this)}>
      Register
    </div>
  </div>*/
  return (
    <Router history={history}>
      <div id="landing-page-background">
      <div className="root-container">
      
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
      </div>
      
    </Router>
  );
    //<div className="box-container">
    //</div>
}

export default App;

