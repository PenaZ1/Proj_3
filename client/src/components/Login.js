import React, { useState } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Hero from "./Hero";
import '../styles/hero.css';
import '../App.css';
import "../styles/Login.css";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [res, setRes] = useState("");

    // Automatically log user in if email and password are present in localStorage
    if (localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
        axios.post('/api/login', {
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password')
        }).then((res) => {
            if (!('error' in res.data)) {
                window.location.href = res.data.url;
            }
        });
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let resT = await axios.post('/api/login', {
            email: email,
            password: password
        })
        if ('error' in resT.data) {
            setRes(resT.data.error);
        } else {
            setRes('');
            localStorage.setItem('email', resT.data.email);
            localStorage.setItem('password', resT.data.password);
            window.location.href = resT.data.url;
        }
    }

    function handleRegister() {
        window.location.href = "register";
    }

    return (
        <>

            <div className="Login">
                <form onSubmit={handleSubmit}>
                    <h2 id="cloudTitle"><b>Cloud</b>Carry</h2> <br />
                    <FormLabel>Email</FormLabel>
                    <FormGroup controlId="email">
                        <FormControl
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </FormGroup>
                    <span id="error">{res}</span> <br />
                    <Button block disabled={!validateForm()} type="submit">
                        Login
                </Button>
                    <Button onClick={handleRegister}>Register</Button>
                </form>
            </div>
            <Hero></Hero>
        </>
    );
}

export default Login;
