import React, {useState, useEffect} from "react"
import { withRouter } from 'react-router-dom'


import Firebase, { withFirebase } from '../Firebase'



const ProposalsList = (props) =>{
    function useProposal(){
        const [proposal, setProposals] = useState([])
    
        useEffect(()=>{
            props.firebase.db.collection("proposals")
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
                    <h2>{pr.title}</h2>
                    <h4>{pr.text}</h4>
                    <p>Votes For: {pr.votesFor}</p>
                    <p>Votes Against: {pr.votesAgainst}</p>
                </li>
            )}
        </ul>
    )
}

export default withFirebase(ProposalsList)