import React from 'react';
import Login from "components/Login";
import Register from "components/Register";
import Navigation from "../components/Navigation";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const LoginPage = () => {
    return (
        <div classname="LoginPage">
            <Hero />
            <Login />
        </div>
    )
}

export default LoginPage;