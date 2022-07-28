import React from "react";

const BusinessCard = (props) => {
    const {company,email,name,phoneNumber,team}= props.info


    return (<div>
        <p>company : {company}</p>
        <p>email : {email}</p>
        <p>name :  {name}</p>
        <p>phoneNumber :{phoneNumber}</p>
        <p>team : {team}  </p>
    </div>)
}

export default BusinessCard