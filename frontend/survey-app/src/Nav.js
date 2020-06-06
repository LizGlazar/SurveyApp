import React from 'react';
import './Assets/css/surveyapp.css';
import { Link } from 'react-router-dom';
import history from './history';
import {Button} from 'reactstrap';

function Nav() {

  function isUserLoggedIn() {
    return localStorage.getItem('username') !== null;
  }

  function logout() {
    if (window.confirm("Are you sure you want to log out?")) {
      fetch("http://localhost:8080/auth/logout", {
        method: 'POST',
        credentials: 'include'
      }).then(result => {
        if (result.status === 200) {
          console.log("Successfully logged out");
          localStorage.removeItem("isCoordinator");
          localStorage.removeItem("username");
          history.push("/")
        } else {
          console.error("Failed to log user out");
        }
      })
    }
  }

  function loginOrLogout() {
    if (!isUserLoggedIn()) {
      return <div>
      <Link to='/login'>
      <p id="button-login" href="#">LOG IN</p>
      </Link>
      <Link to='/signup'>
      <p id="button-sign-up" href="#">SIGN UP</p>
      </Link>
      </div>
      } else {
        return <Button onClick={logout}>
        <p id="button-logout" href="#">LOG OUT</p>
        </Button>
  }
  }
  return (
    <nav>
        {loginOrLogout()}
        <Link to='/about'>
        <p id="button-about" href="#">ABOUT</p>
        </Link>
        <Link to='/contact'>
        <p id="button-contact" href="#">CONTACT</p>
        </Link>
    </nav>
  );
}

export default Nav;
