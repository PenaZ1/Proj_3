import React from 'react';
import './App.css';
import Register from "components/Register";
import MapContainer from "components/MapContainer"
import Login from "components/Login";
import TakeOff from "components/TakeOff";
import Confirm from "components/Confirm";
import Destination from "components/Destination";
// import CardInput from "components/CardInput";
import Hero from "components/Hero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero></Hero>
        {/* <MapContainer></MapContainer>
        <Login></Login>
        <Register></Register>
        <TakeOff></TakeOff>
        <Confirm></Confirm>
        <Destination></Destination> */}
        {/* <CardInput></CardInput> */}
      </header>
    </div>
  );
}

export default App;
