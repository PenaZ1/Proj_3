import React, { useState } from "react";
import axios from "axios";
import { AST_DefClass } from "terser";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/Register.css"
import Hero from "./Hero"

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [res, setRes] = useState('');

    async function signUp(e) {
        e.preventDefault();
        let resT = await axios.post('/api/register', {
            email: email,
            password: password
        })
        console.log(resT)
        if (!resT.data.hasOwnProperty('error')) {
            window.location.href = "/login";
        } else {
            setRes(resT.data.error);
        }
    };

    return (
        <>
            <div className="Login">
                <form>
                    <h2>Cloud Carry</h2> <br />
                    <FormLabel>Email:</FormLabel>
                    <FormGroup controlId="email">
                        <FormControl
                            autoFocus
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type="password"
                        />
                    </FormGroup>
                    <span id="error">{res}</span> <br />
                    <Button onClick={signUp} type="submit">
                        Sign Up!
        </Button>

                </form>
            </div>
            <Hero></Hero>
        </>
    );
}

export default Register;