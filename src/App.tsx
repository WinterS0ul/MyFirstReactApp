import React from "react";
import './App.css';
import DisplayAllUsers from "./Components/UserManagment/DisplayAllUsers";
import Logo from "./Components/Buttons/Logo";

function App() {
  return (
    <>
      <div className="App">
      <header className="App-header">
        <Logo/>
        <DisplayAllUsers/>
      </header>
    </div>
  </>
  );
}

export default App;