import React, { useState } from "react";
import { Navbar, Nav, justify } from "react-bootstrap";

function Navigation(props) {
    //conditional for if user selects yes to go to payment component, if no goes back to
    //destination component
    return (
        <container>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand className="navbar-brand-custom" href="/">CloudCarry</Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/users">Register</Nav.Link>
                </Nav>
            </Navbar>
        </container>

    )
}

export default Navigation;
