import React from 'react';
import './Assets/css/surveyapp.css';
import { Link } from 'react-router-dom';

function Nav() {

  function isUserLoggedIn() {
    return localStorage.getItem('username') !== null;
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
        return <Link to='/logout'>
        <p id="button-logout" href="#">LOG OUT</p>
        </Link>
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
