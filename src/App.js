import React from "react";
import logo from "./assets/big_politips.png";
import "./App.css";
import WelcomeSteps from "./components/WelcomeSteps";
import Navbar from "./components/Navbar";
import "./styles/reset.css";
import "./styles/helpers.css";


function App() {
  return (
    <div className="App-container">
    <img src={logo} className="App-logo" alt="logo"/>
    <WelcomeSteps />
    <Navbar />
    <span className='bottom-bar'></span>
    </div>
  );
}

export default App;
