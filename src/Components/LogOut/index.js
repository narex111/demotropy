import React, {Component} from 'react'

import { withFirebase } from '../Firebase'

import { Button } from 'reactstrap';



const LogOut = ({ firebase }) => (
  <Button outline color="secondary" onClick={firebase.doSignOut}>
    Log Out
  </Button>
)



export default withFirebase(LogOut)