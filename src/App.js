import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'

import Navigation from "./Components/Navigation"
import Register from "./Components/Register"
import Home from "./Components/Home"
import * as ROUTES from './Constants/routes'
import {withFirebase} from "./Components/Firebase"
import LogIn from './Components/LogIn';


class App extends Component {
  
  state = {
    authUser: null
  }

  async componentDidMount() {
    // const t = await fetch('http://localhost:5001/react-firestore-5a3c9/us-central1/app/api/v1/get-tacos')
    // const ty = await t.json()
    console.log(this.props)
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
      ? this.props.firebase.user(authUser.uid).get()
          .then(snapShot => this.setState({authUser: snapShot.data()}))
        // ? this.props.firebase.collection('users').doc(authUser.uid).get()
        //     .then(snapShot => this.setState({ authUser: snapShot.data() }))
        : this.setState({ authUser: null })
    })
  }

  render(){
    return (
      <div className="App">
        <Navigation authUser={this.state.authUser}/>
        <hr/>
        <Switch>
          <Route exact path={ROUTES.REGISTER} component={Register}></Route>
          <Route exact path={ROUTES.LOG_IN} component={LogIn}/>
          <Route exact path={ROUTES.HOME} component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default withFirebase(App);
