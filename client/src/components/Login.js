import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Hero from "./Hero";
import '../styles/hero.css';
import '../App.css';
import "../styles/Login.css";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleRegister(){
        window.location.href = "register";
    }

    return (
        <>
        <div className="Login">
            <form onSubmit={handleSubmit}>
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