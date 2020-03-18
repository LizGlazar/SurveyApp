import React from 'react';
import './Assets/css/surveyapp.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to='/login'>
        <p id="button-login" href="#">LOG IN</p>
        </Link>
        <Link to='/signup'>
        <p id="button-sign-up" href="#">SIGN UP</p>
        </Link>
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
