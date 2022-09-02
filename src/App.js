import React from 'react';
import './styles/reset.css'
import './styles/helpers.css'
import './App.css';
import HomeSteps from './components/HomeSteps';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Quiz from './components/Quiz';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
        <Routes>
          <Route path="/home" element={<HomeSteps/>}/>
        
          <Route path="/:theme" element={<Category/>}/>

          <Route path="/:theme/:category" />

          <Route path="/:theme/:category/:id" element={<Quiz/>}/>
        
          <Route path="/" element={<Navbar/>}/>
        
        </Routes>
  );
}

export default App;
