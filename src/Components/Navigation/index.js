import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar,
Nav,
NavItem} from "reactstrap"

import LogOut from '../LogOut'

import * as ROUTES from "../../Constants/routes"

const Navigation = ({ authUser }) => (
  <div>
    <Navbar color="light" light expand="md">

    {authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />}
    </Navbar>
  </div>
)

const NavigationNonAuth = () => (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink exact to={ROUTES.LOG_IN}>Log In</NavLink> 
      </NavItem>
      <NavItem>
        <NavLink exact to={ROUTES.REGISTER}>Register</NavLink>
      </NavItem>
    </Nav>
)

const NavigationAuth = ({ authUser }) => (
  <ul>
    {/* <li>
      <NavLink exact to={ROUTES.LANDING}>Landing</NavLink>
    </li> */}
    <li>
      <NavLink exact to={ROUTES.HOME}>Home</NavLink>
    </li>
    <li>
      <NavLink exact to={ROUTES.CREATEPROPOSAL}>Create Proposal</NavLink>
    </li>
    <li>
      {authUser.username} <LogOut />
    </li>
  </ul>
)

export default Navigation