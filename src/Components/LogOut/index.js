import React, {Component} from 'react'

import { withFirebase } from '../Firebase'


const LogOut = ({ firebase }) => (
  <button type='button' onClick={firebase.doSignOut}>
    Log Out
  </button>
)



export default withFirebase(LogOut)