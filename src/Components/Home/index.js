import React, { Component, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import Firebase, { withFirebase } from '../Firebase'

import ProposalsList from "../ProposalsList"



class Home extends Component {

    // createProposal=()=>{
    //     this.props.firebase.createProposal()
    // }
    render(){
        console.log(this.props, "props in Home")
        // this.createProposal()
        return(
            <ProposalsList/>
        )
    }
}

export default withRouter(withFirebase(Home))