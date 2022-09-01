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
    <div className="App">
      <div className ='container'>
        <Quiz></Quiz>
      </div>
    </div>
  );
}

export default App;
