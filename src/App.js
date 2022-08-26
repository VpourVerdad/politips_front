import React from 'react';
import logo from './assets/big_politips.png';
import './App.css';
import './components/WelcomeSteps';
import WelcomeSteps from './components/WelcomeSteps';
import './styles/reset.css';
import './styles/helpers.css';


function App() {
  return (
    <div className="App-container">
    <img src={logo} className="App-logo" alt="logo"/>
    <WelcomeSteps />
    <span className='bottom-bar'></span>
    </div>
  );
}

export default App;
