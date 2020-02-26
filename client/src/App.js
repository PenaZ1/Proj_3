import React from 'react';
import './App.css';
import './styles/hero.css';
import Register from "components/Register";
import Login from "components/Login";
import Hero from "components/Hero";
import EnterBtn from "components/EnterBtn";
import TakeOffPage from "./pages/TakeOffPage";
import Navigation from "components/Navigation";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (

    <Router>
      <div classname="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/takeoff" component={TakeOffPage} />
          <Route exact path="/destination" component={DestinationPage} />
          <Route exact path="/confirmation" component={ConfirmPage} />
          <Route exact path="/enjoy" component={EnjoyPage} />
        </Switch>
      </div>
    </Router>
  )
  //     <div className="App">
  //       <header className="App-header">
  //       <EnterBtn></EnterBtn>
  //         <Hero></Hero>
  //       <EnterBtn></EnterBtn>
  //       <MapContainer></MapContainer>
  //         <Login></Login>
  //         <Register></Register>
  //         <TakeOff></TakeOff>
  //         <Confirm></Confirm>
  //         <Destination></Destination>
  //       </header>
  //     </div>
  //   );

}

export default App;
