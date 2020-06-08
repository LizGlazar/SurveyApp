import React from 'react';
import './Assets/css/surveyapp.css';
import { Link } from 'react-router-dom';
import history from './history';
import { Button,
  Navbar,
  Nav as BootstrapNav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

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
      return <div Style="display: flex">
         <NavItem>
              <NavLink href="/login">LOGIN</NavLink>
        </NavItem>
        <NavItem>
              <NavLink href="/signup">SIGN UP</NavLink>
        </NavItem>
      {/*<Link to='/login'>
      <p className="nav-item" id="button-login" href="#">LOG IN</p>
      </Link>
      <Link to='/signup'>
      <p className="nav-item" id="button-sign-up" href="#">SIGN UP</p>
    </Link>*/}
      </div>
      } else {
        return <NavItem onClick={logout}>
        <NavLink>LOG OUT</NavLink>
        </NavItem>
  }
  }
  return (
    <div style={{zIndex: 100}}>
        <Navbar color="transparent" dark expand="md">
        <BootstrapNav className="mr-auto" navbar>
        {loginOrLogout()}
        <NavItem>
              <NavLink href="/about">ABOUT</NavLink>
        </NavItem>
        <NavItem>
              <NavLink href="/contact">CONTACT</NavLink>
        </NavItem>
        <NavItem>
              <NavLink href="/terms-and-conditions">TERMS &amp; CONDITIONS</NavLink>
        </NavItem>
        {/*<Link to='/about'>
        <p className="nav-item" id="button-about" href="#">ABOUT</p>
        </Link>
        <Link to='/contact'>
        <p className="nav-item" id="button-contact" href="#">CONTACT</p>
        </Link>
        <Link to='/terms-and-conditions'>
        <p className="nav-item" id="button-terms-and-conditions" href="#">TERMS &amp; CONDITIONS</p>
        </Link>*/}
        </BootstrapNav>
        </Navbar>
    </div>
  );
}

export default Nav;
