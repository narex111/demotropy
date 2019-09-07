import React, {Component} from "react"

import { withRouter } from 'react-router-dom'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../Constants/routes'

const Register = (props) => {
    return (
        <div>
            <h3>Register</h3>
            <RegisterBase/>
        </div>
    )
}

class RegisterForm extends Component{
    state={
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
    }

    onChange = event => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    onSubmit = (event)=> {
        console.log(this.props)

        const { username, email, passwordOne } = this.state
        event.preventDefault()
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
        return this.props.firebase.db.collection('users').doc(authUser.user.uid).set({
            username,
            email
        })
        })
        .then(() =>  {
        this.props.history.push(ROUTES.HOME)
        })
        .catch(error => {
        this.setState({error})
        })
    
    }

    render(){
        console.log(this.state)
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state
        
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''

        return(
            <form onSubmit={this.onSubmit}>
                <input
                    name='username'
                    value={username}
                    onChange={this.onChange}
                    type='text'
                    placeholder='Full Name'
                />
                <input
                    name='email'
                    value={email}
                    onChange={this.onChange}
                    type='text'
                    placeholder='Email'
                />
                <input
                    name='passwordOne'
                    value={passwordOne}
                    onChange={this.onChange}
                    type='password'
                    placeholder='Password'
                />
                <input
                    name='passwordTwo'
                    value={passwordTwo}
                    onChange={this.onChange}
                    type='password'
                    placeholder='Confirm Password'
                />
                <button type='submit' disabled={isInvalid}>Sign Up</button>
                {error && error.message}
            </form>
        )
    }
}

const RegisterBase = withRouter(withFirebase(RegisterForm))

export default Register