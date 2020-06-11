import React from 'react';
import './Assets/css/surveyapp.css';
import './Assets/css/loginAndSignUpSty.css';
import Ellipse from './components/ellipseComponent/ellipse';
import Nav from './Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import LogIn from './components/pages/LogIn';
import LogOut from './components/pages/LogOut';
import LoginBox from './components/loginBoxComponent/loginBox';
import SignUp from './components/pages/SignUp';
import history from './history';
import CoordinatorsSurveyList from './components/pages/CoordinatorsSurveyList';
import CoordinatorsEditSurveyPage from './components/pages/CoordinatorsEditSurveyPage';
import CoordinatorsCreateSurveyPage from './components/pages/CoordinatorsCreateSurveyPage';
import ShowResultsPage from './components/pages/ShowResultsPage';
import RespondentsSurveyListPage from './components/pages/RespondentsSurveyListPage';
import RespondentsSurveyPage from './components/pages/RespondentsSurveyPage';
import TermsAndConditions from './components/pages/Terms&Conditions';


function App() {
  return (
    <Router history={history}>
      
      <div id="landing-page-background">
        
      <div className="root-container">
      <Nav />
      
        
        <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/login" component={LogIn} />
        <Route path="/logout" component={LogOut} />
        <Route path="/signup" component={SignUp} />
        <Route path="/coordinators-survey-list" component={CoordinatorsSurveyList} />
        <Route path="/coordinators-edit-survey-page/:id" component={CoordinatorsEditSurveyPage} />
        <Route path='/coordinators-create-survey-page' component={CoordinatorsCreateSurveyPage} />
        <Route path='/coordinators-show-results-page/:id' component={ShowResultsPage} />
        <Route path='/respondents-survey-list-page' component={RespondentsSurveyListPage} />
        <Route path='/respondents-survey-page/:id' component={RespondentsSurveyPage} />
        <Route path='/respondents-survey-results-page/:id' component={ShowResultsPage} />
        
        </Switch> 
        <Ellipse />
      </div> 
      </div>
      
    </Router>
  );
}

export default App;

