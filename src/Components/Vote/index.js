import React, {useState, useEffect} from "react"
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap';

import Firebase, { withFirebase } from '../Firebase'



const Vote = (props) =>{
    const [votesFor, setVotesFor] = useState(0)
    const [votesAgainst, setVotesAgainst] = useState(0)
    const proposalId = props.id

    function onClickYes(){
        setVotesFor(votesFor+1)
        props.firebase.db.
        collection("proposals").
        doc(proposalId).
        update({
            "votesFor": parseInt(votesFor)
        })
    }

    function onClickNo(){
        setVotesAgainst(votesAgainst-1)
        const proposalId = props.id
        props.firebase.db.
        collection("proposals").
        doc(proposalId).
        update({
            "votesAgainst": parseInt(votesAgainst)
        })
    }
    
    return(
        <div>
        <button onClick={onClickYes}>For</button>
        <button onClick={onClickNo}>Against</button>
        </div>

    )
}


export default withFirebase(Vote)