import React from 'react';

//components
//import Header from './components/headerComponent/header';
//import Ellipse from './components/ellipseComponent/ellipse';
//import Homepage from './components/pages/homePage';

//includes
//import './Assets/css/default.min.css';
import './Assets/css/surveyapp.css';
import './Assets/css/loginAndSignUpSty.css';
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
import CoordinatorsSurveyList from './components/pages/CoordinatorsSurveyList';
import CoordinatorsEditSurveyPage from './components/pages/CoordinatorsEditSurveyPage';
import CoordinatorsCreateSurveyPage from './components/pages/CoordinatorsCreateSurveyPage';
import CoordinatorsShowResultsPage from './components/pages/CoordinatorsShowResultsPage';
import RespondentsSurveyListPage from './components/pages/RespondentsSurveyListPage';
import RespondentsSurveyPage from './components/pages/RespondentsSurveyPage';
import RespondentsSurveyResultsPage from './components/pages/RespondentsSurveyResultsPage';




function App() {
  /*constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }
  //lifecycle hook (deprecated)
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here (fill the state with the data that comes in)
    this.setState({
      chartData:{
        labels: ['A answers', 'B answers', 'C Answers', 'Other answers'], 
        datasets:[
          {
            label: 'Number of respondents',
            data: [
              1,
              2,s
              3,
              4
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)'
            ]
          }
        ]
      }
    });
  } */
  
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
        <Route path="/coordinators-survey-list" component={CoordinatorsSurveyList} />
        <Route path="/coordinators-edit-survey-page/:id" component={CoordinatorsEditSurveyPage} />
        <Route path='/coordinators-create-survey-page' component={CoordinatorsCreateSurveyPage} />
        <Route path='/coordinators-show-results-page/:id' component={CoordinatorsShowResultsPage} />
        <Route path='/respondents-survey-list-page' component={RespondentsSurveyListPage} />
        <Route path='/respondents-survey-page/:id' component={RespondentsSurveyPage} />
        <Route path='/respondents-survey-results-page/:id' component={RespondentsSurveyResultsPage} />
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

