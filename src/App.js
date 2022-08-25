import React from 'react';
import logo from './assets/big_politips.png';
import './App.css';
import './components/WelcomeSteps'
import WelcomeSteps from './components/WelcomeSteps';

function App() {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo"/>
    <WelcomeSteps />
    <span></span>
    </div>
  );
}

export default App;
