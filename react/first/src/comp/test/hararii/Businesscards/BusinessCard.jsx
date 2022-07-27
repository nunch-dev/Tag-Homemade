import React from "react";

const BusinessCard = (props) => {

    return (<div>
        <p>company : {props.company}</p>
        <p>email : {props.email}</p>
        <p>name :  {props.name}</p>
        <p>phoneNumber :{props.phoneNumber}</p>
        <p>team : {props.team}  </p>
    </div>)
}

export default BusinessCard