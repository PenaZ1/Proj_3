import React from 'react';
import './App.css';
import './styles/hero.css';
import './styles/EnterBtn.css';
import Register from "components/Register";
import Login from "components/Login";
import DestinationPage from "./pages/DestinationPage";
import TakeOffPage from "./pages/TakeOffPage";
import HomePage from "./pages/HomePage";
import EnjoyPage from "./pages/EnjoyPage";

import ConfirmPage from "./pages/ConfirmPage";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/takeoff" component={TakeOffPage} />
            <Route exact path="/destination" component={DestinationPage} />
            <Route exact path="/enjoy" component={EnjoyPage} />
            <Route exact path="/confirm" component={ConfirmPage} />

          </Switch>
        </header>
      </Router>
    </div>
  )
}

export default App;
