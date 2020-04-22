import React from 'react'

function TeamMember (props){
 return(
     <div>
        <h3>Name: {props.details.name}</h3>
        <p>Email: {props.details.email}</p>
        <p>Role: {props.details.role}</p>
    </div>
 )  
}

export default TeamMember