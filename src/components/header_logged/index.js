import React, {useState} from 'react';
import { Navbar, Container, Column, Button, Dropdown } from 'rbx';
import logoImage from '../../assets/images/logo-white.png';
import "../../styles/header.scss";
import UsersService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user'));
    
  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  }

  if (redirectToHome == true){
    return <Navigate to={{ pathname: "/" }} />
  }

  const verifyNameLenght = () => {
    const name = JSON.parse(user).name
    if(name.length > 15){
      return JSON.parse(user)['name'].charAt(0).toUpperCase() + JSON.parse(user)['name'].slice(1).substring(0,14) + ' ...'
    } else {
      return JSON.parse(user)['name'].charAt(0).toUpperCase() + JSON.parse(user)['name'].slice(1)
    }
  }

  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Navbar.Brand>
        <Column.Group>
          <Column size="11" offset="1">
            <Link to="/notes">
              <img src={logoImage} />
            </Link>
          </Column>
        </Column.Group>
        <Navbar.Burger
          className="navbar-burger burger" 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
          <Navbar.Item as="div">
            <Button 
              className="open-button"
              id='menuNotas'
              color="white" 
              onClick={() => props.setIsOpen(true)}>
              <FontAwesomeIcon icon={faBars} color='white'/>
            </Button>
          </Navbar.Item>
        </Navbar.Segment>
        <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
          <Navbar.Item as="div">
            <Dropdown hoverable>
              <Dropdown.Trigger>
                <Button className="button" color="white" id='menulateral' outlined>
                  <span>{ verifyNameLenght() } <FontAwesomeIcon icon={ faUser } /></span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Content>
                  <Dropdown.Item as="div">
                    <Link to="/users/edit">User Edit <FontAwesomeIcon icon={faUserPen}/></Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as="div">
                    <a href="#" onClick={e => logOut()}>LogOut <FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default HeaderLogged;