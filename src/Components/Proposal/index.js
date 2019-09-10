import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'

import Vote from "../Vote"

const Proposal = (props) => {
    const [proposal, setProposal] = useState({})
    console.log(props.firebase.auth, "props auth in Proposal")
    console.log(props.firebase.db.collection("users").doc().id, "props user in Proposal")

    // useEffect(()=>{
    //     const id = props.match.params.id
    //     props.firebase.db.collection("proposals").doc(id)
    //         .get()
    //         .then(snapShot => setProposal({...snapShot.data(), id: snapShot.id}))
    //     .catch(err => console.log(err))
    // }, [])

    useEffect(()=>{
        const id = props.match.params.id
        props.firebase.db.collection("proposals").doc(id)
        .onSnapshot((snapShot) => setProposal({...snapShot.data(), id: snapShot.id}))
    }, [])

    return (
        <div>
            <h1>{proposal.title}</h1>
            <h3>{proposal.text}</h3>
            <Vote id={proposal.id}/>
            <p>Votes For: {proposal.votesFor}</p>
            <p>Votes Against: {Math.abs(proposal.votesAgainst)}</p>
        </div>
    )
}

export default withFirebase(withRouter(Proposal))