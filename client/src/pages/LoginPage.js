import React from 'react';
import Login from "components/Login";
import Register from "components/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const LoginPage = () => {
    return (
        <Router>
            <div classname="LoginPage">
                <Switch>
                    <Route exact path="/" component={Hero} />
                    <Route exact path="/Login" component={Register} />
                </Switch>
            </div>
        </Router>
    )
}

export default LoginPage;