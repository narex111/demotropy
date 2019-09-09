import React, {useState, useEffect} from "react"
import { withRouter } from 'react-router-dom'


import Firebase, { withFirebase } from '../Firebase'



const ProposalsList = (props) =>{
    function useProposal(){
        const [proposal, setProposals] = useState([])
    
        useEffect(()=>{
            props.firebase.db.collection("proposal")
            .onSnapshot ((snapshot)=>{
                console.log(snapshot, "snapshot in usEffect in ProposalList function")
              const newProposal = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
              }))
              console.log(newProposal, "newProposal in usEffect in ProposalList function")
              setProposals(newProposal)
            })
        }, [])

        return proposal
    }

    const proposals = useProposal()
    console.log(proposals, "proposals in ProposalList")
    console.log(props, "props in PropsalList")

    return(
        <ul>
            {proposals.map((pr)=>
                <li key={pr.id}>
                    <div>{pr.title}</div>
                    <div>Votes For: {pr.votesFor}</div>
                    <div>Votes Against: {pr.votesAgainst}</div>
                    <div>{pr.body}</div>
                </li>
            )}
        </ul>
    )
}

export default withFirebase(ProposalsList)