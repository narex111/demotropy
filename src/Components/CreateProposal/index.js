import React, {useState, useEffect} from "react"
import { withRouter } from 'react-router-dom'


import Firebase, { withFirebase } from '../Firebase'
import ProposalsList from "../ProposalsList";



const CreateProposal = (props) => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [confirmation, setConfirmation] = useState("")


    
    function onSubmit(e){
        e.preventDefault()
        props.firebase.db.
        collection("proposals").
        add({
            title,
            text,
            votesFor: 0,
            votesAgainst:0
        })
        .then(()=>{
            setTitle("")
            setText("")
            setConfirmation("Proposal has been created")
        })
        .then(
            props.history.push("proposal/")
        )
    }

    // props.firebase.db.collection("proposals")
    // .onSnapshot((snapshot)=>{
    //     console.log(snapshot.docs, "snapshot in CreateProposal")
    // })

    return(
        <div>
           <form onSubmit={onSubmit}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)}></input>
                <label>Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.currentTarget.value)}></input>
                <button type="submit">Button</button>
            </form>
            <div>{confirmation}</div>
        </div>
    )
}

export default withRouter(withFirebase(CreateProposal))