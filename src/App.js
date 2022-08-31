import React from 'react';
import './css/reset.css'
import './css/helpers.css'
import './App.css';
import WelcomeSteps from './components/WelcomeSteps';
import Navbar from './components/Navbar';
import logo from './assets/big_politips.png';
import Category from './components/Category';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <div className ='container'>
        <Quiz></Quiz>
      </div>
    </div>
  );
}

export default App;
