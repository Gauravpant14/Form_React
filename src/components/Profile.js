import React from 'react'
import { connect } from "react-redux";

const Profile = ({fn,email,pass}) => {
    return (
        <div>
            <h2>Your First Name is {fn}: </h2>
            <h2>Your Email is : {email} </h2>
            <h2>Your Pass {pass}</h2>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      fn: state.firstName,email:state.email,pass:state.pass 
    };
  };
  export default connect(mapStateToProps)(Profile);
