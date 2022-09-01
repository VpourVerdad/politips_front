import React from 'react';
import './styles/reset.css'
import './styles/helpers.css'
import './App.css';
import WelcomeSteps from './components/WelcomeSteps';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Quiz from './components/Quiz';


function App() {
  return (
    <div className="App-container">
    <span className="big-circle"></span>
    <span className="circle"></span>
    <img src={logo} className="App-logo" alt="logo"/>
    <HomeSteps />
    <span className='bottom-bar'></span>
    </div>
  );
}

export default App;
