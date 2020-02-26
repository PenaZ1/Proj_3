import React, { useState } from "react";
import axios from "axios";
import { AST_DefClass } from "terser";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signUp(e) {
        e.preventDefault();
        let res = await axios.post('/api/register', {
            email: email,
            password: password
        })
        console.log(res.data);
    };

    return(
        <>
            <h2>Register</h2>
            <form>
                Email: <input onChange={event => setEmail(event.target.value)}></input>
                Password: <input onChange={event => setPassword(event.target.value)}></input>
                Terms and Conditions: <input type="checkbox"></input> 
                <button onClick={signUp}>Sign up</button>
            </form>
        </>
    );
}

export default Register;