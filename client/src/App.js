import React from 'react';
import './App.css';
import Register from "components/Register";
import Login from "components/Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
        <Register></Register>
      </header>
    </div>
  );
}

export default App;
