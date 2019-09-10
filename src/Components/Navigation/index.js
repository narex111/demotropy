import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar,
Nav,
NavItem,
NavbarBrand,
} from "reactstrap"

import LogOut from '../LogOut'

import * as ROUTES from "../../Constants/routes"

const Navigation = ({ authUser }) => (
  <div>
      {authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />}
  </div>
)

const NavigationNonAuth = () => (
  <Navbar color="dark" light expand="md" style={{height: "80px"}}>
    <Nav  navbar horizontal>

      <NavItem style={{margin: '10px'}}>
        <NavLink exact to={ROUTES.LOG_IN} style={{color: 'white'}}>Log In</NavLink> 
      </NavItem>
      <NavItem style={{margin: '10px'}}>
        <NavLink exact to={ROUTES.REGISTER} style={{color: 'white'}}>Register</NavLink>
      </NavItem>
    </Nav>  
  </Navbar>
)

const NavigationAuth = ({ authUser }) => (
  <Navbar color="dark" light expand="md"style={{height: "80px"}}>
    <Nav  navbar horizontal>
      <NavItem style={{margin: '10px'}}>
        <NavLink exact to={ROUTES.HOME} style={{color: 'white'}}>Home</NavLink>
      </NavItem>
      <NavItem style={{margin: '10px'}}>
        <NavLink exact to={ROUTES.CREATEPROPOSAL} style={{color: 'white'}}>Create Proposal</NavLink>
      </NavItem>
    </Nav>
    <Nav className="ml-auto" horizontal>
      <NavbarBrand href="ROUTES.HOME" style={{color: 'white'}}>{authUser.username}</NavbarBrand>
      <LogOut />
    </Nav>
  </Navbar>
)

export default Navigation