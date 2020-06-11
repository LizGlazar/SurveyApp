import React from 'react';
import './Assets/css/surveyapp.css';
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
      return <div style={{display: "flex"}}>
         <NavItem>
              <NavLink href="/login">LOGIN</NavLink>
        </NavItem>
        <NavItem>
              <NavLink href="/signup">SIGN UP</NavLink>
        </NavItem>
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
        </BootstrapNav>
        </Navbar>
    </div>
  );
}

export default Nav;
