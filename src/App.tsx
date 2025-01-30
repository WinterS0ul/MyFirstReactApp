import React from "react";
import logo from './logo.svg';
import './App.css';
import DisplayAllUsers from "./Components/UserManagment/DisplayAllUsers";

function App() {

  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayAllUsers/>
      </header>
    </div>
  </>
  );

}

export default App;
