import React from "react";
import '../Resources/Styles/App.css';
import DisplayAllUsers from "../Components/UserManagment/DisplayAllUsers";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import MainHeader from "../Components/Header/MainHeader";

function App() {
  return (
    <Router>
        <div className="App">
          <MainHeader/>
            <div className="App-content">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/displayUsers" element={<DisplayAllUsers />} />
              </Routes>
            </div>
        </div> 
  </Router>
  );
}

export default App;