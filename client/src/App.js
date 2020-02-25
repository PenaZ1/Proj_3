import React from 'react';
import './App.css';
import Register from "components/Register";
import MapContainer from "components/MapContainer"
import Login from "components/Login";
import TakeOff from "components/TakeOff";
import Confirm from "components/Confirm";
import Destination from "components/Destination";
import CardInput from "components/CardInput";
import Hero from "components/Hero";
import EnterBtn from "components/EnterBtn";
import TakeOffPage from "./pages/TakeOffPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div classname="App">
        {/* <Navbar> needs to be created with login, logout and about
        </Navbar> */}
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/users">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/takeoff" component={TakeOffPage} />


        </Switch>
      </div>
    </Router>
  )
}

export default App;
// separate each page wrapped into other routes - might need subroutes

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <Hero></Hero> */}
//         <EnterBtn></EnterBtn>
//         <MapContainer></MapContainer>
//         <Login></Login>
//         <Register></Register>
//         <TakeOff></TakeOff>
//         <Confirm></Confirm>
//         <Destination></Destination>
//       </header>
//     </div>
//   );
// }
