import React, { useState, useEffect } from "react";
import { Navbar, Nav, justify } from "react-bootstrap";

function Navigation(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    
    function handleLogout(){
        localStorage.setItem('email','');
        localStorage.setItem('password','');
        window.location.href = "/";
    }

    function handleLogin(){
        window.location.href = '/login';
    }

    function handleRegister(){
        window.location.href = '/register';
    }

    useEffect(() => {
        if (localStorage.getItem('email') === null || localStorage.getItem('password')){
            localStorage.setItem('email','');
            localStorage.setItem('password','');
        }
        
        if (localStorage.getItem('email').length > 0 && localStorage.getItem('password').length > 0){
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
    });

    function NavLinks(){
        if (loggedIn){
            return (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            );
        }else{
            return (
                <>
                    <Nav.Link onClick={handleLogin}>Login</Nav.Link>
                    <Nav.Link onClick={handleRegister}>Register</Nav.Link>
                </>
            );               
        }
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand className="navbar-brand-custom">CloudCarry</Navbar.Brand>
            <Nav className="mr-auto" >
                <NavLinks />
            </Nav>
        </Navbar>
    );
}

export default Navigation;
