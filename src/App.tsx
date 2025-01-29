import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/hello") // Backend API URL
      .then(response => response.text()) // Convert response to text
      .then(data => setMessage(data)) // Set state with response data
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div>
        <h1>React + Spring Boot</h1>
        <p>Backend Response: {message}</p>
      </div>
  </>
  );

}

export default App;
