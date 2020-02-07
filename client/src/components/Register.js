import React, { useState } from "react";
import axios from "axios";

class Register extends React.Component{

    signUp(params) {
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
 
    }

    render(){
        axios.get("/").then((res)=>{console.log(res)})
        return(
            <>
                <h2>Register</h2>
                <form>
                    Email: <input></input>
                    Password: <input></input>
                    Terms and Conditions: <input type="checkbox"></input> 
                    <button>Sign up</button>
            
                </form>
            </>
        );
    }
}

export default Register;