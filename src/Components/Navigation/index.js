import React from 'react'
import { NavLink } from 'react-router-dom'

import LogOut from '../LogOut'

import * as ROUTES from "../../Constants/routes"

const Navigation = ({ authUser }) => (
  <div>
  {authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />}
  </div>
)

const NavigationNonAuth = () => (
    <ul>
      <li>
        <NavLink exact to={ROUTES.LOG_IN}>Log In</NavLink> 
      </li>
      <li>
        <NavLink exact to={ROUTES.REGISTER}>Register</NavLink>
      </li>
    </ul>
)

const NavigationAuth = ({ authUser }) => (
  <ul>
    {/* <li>
      <NavLink exact to={ROUTES.LANDING}>Landing</NavLink>
    </li> */}
    <li>
      <NavLink exact to={ROUTES.HOME}>Home</NavLink>
    </li>
    {/* <li>
      <NavLink exact to={ROUTES.ACCOUNT}>Account</NavLink>
    </li> */}
    <li>
      {authUser.username} <LogOut />
    </li>
  </ul>
)

export default Navigation