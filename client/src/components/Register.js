import React, { useState } from "react";
import axios from "axios";
import { AST_DefClass } from "terser";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/Register.css"
import Hero from "./Hero"

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [res, setRes] = useState('');

    async function signUp(e) {
        e.preventDefault();
        let resT = await axios.post('/api/register', {
            email: email,
            password: password
        })
        if (!'error' in resT.data){
            window.location.href="/login";
        }else{
            setRes(resT.data.error);
        }
    };

    return(
        <>
          <div id="Register">
              <h2>Register</h2>
              <form>
                  Email: <br/><input onChange={event => setEmail(event.target.value)}></input> <br/>
                  Password: <br/><input onChange={event => setPassword(event.target.value)}></input><br/>
                  Terms and Conditions: <input type="checkbox"></input> <br/>
                  <Button onClick={signUp}>Sign up</Button> <br/>
                  <span>{res}</span>
              </form>
          </div>
          <Hero></Hero>
        </>
    );
}

export default Register;