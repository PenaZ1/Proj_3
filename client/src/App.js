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

//pull in context provider and wrap components
// with it to make state/dispatch available to them
import { ContextProvider } from "./appReducer";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/takeoff">
              <ContextProvider>
                <TakeOffPage />
              </ContextProvider>
            </Route>
            <Route exact path="/destination">
              <ContextProvider>
                <DestinationPage />
              </ContextProvider>
            </Route>
            <Route exact path="/enjoy">
              <EnjoyPage />
            </Route>
            <Route exact path="/confirm">
              <ContextProvider>
                <ConfirmPage />
              </ContextProvider>
            </Route>
          </Switch>
        </header>
      </Router>
    </div>

  )
}

export default App;
