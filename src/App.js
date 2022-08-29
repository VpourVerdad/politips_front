import React from 'react';

import './css/reset.css'
import './css/helpers.css'
import './App.css';
import WelcomeSteps from './components/WelcomeSteps';
import Navbar from './components/Navbar';
import logo from './assets/big_politips.png';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
      
      <span></span>
      <div className ='container'>
        <Category></Category>
      </div>
    </div>
  );
}

export default App;
