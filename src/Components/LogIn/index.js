import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../Constants/routes'

const LogIn = () => (
  <div>
    <h1>SignIn</h1>
    <LogInBase />
    <RegisterLink />
  </div>
)

class LogInForm extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  onSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.firebase
      .doSignInWIthEmailAndPassword(email, password)
      .then(() => 
        this.props.history.push(ROUTES.HOME)
      )
      .catch(error => {
        this.setState({error})
      })
  }

  onChange = event => 
    this.setState({ [event.target.name] : event.target.value})

  render() {
    const { email, password, error } = this.state
    console.log(this.props)
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name='email'
          type='text'
          value={email}
          onChange={this.onChange}
          placeholder='Email Address'
        />
        <input 
          name='password'
          type='password'
          value={password}
          onChange={this.onChange}
          placeholder='Password'
        />
        <button type='submit'>Log In</button>
        {error && error.message}
      </form>
    )
  }
}

const LogInBase = withRouter(withFirebase(LogInForm))

const RegisterLink = () => (
  <p>
    Don't have an account? <NavLink exact to={ROUTES.REGISTER}>Register</NavLink>
  </p>
)

export default LogIn