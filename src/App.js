import React from 'react';
import './css/reset.css'
import './css/helpers.css'
import './App.css';
import WelcomeSteps from './components/WelcomeSteps';
import Navbar from './components/Navbar';

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
