import React, { useState } from "react";
import axios from "axios";

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUp(params) {
        axios.post('http://localhost:3001/register', {port: 3001}, {
            email: email,
            password: password
        });
    };

    return(
        <>
            <h2>Register</h2>
            <form>
                Email: <input onChange={event => setEmail(event.target.value)}></input>
                Password: <input onChange={event => setPassword(event.target.value)}></input>
                Terms and Conditions: <input type="checkbox"></input> 
                <button>Sign up</button>
            </form>
        </>
    );
}

export default Register;