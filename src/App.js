import Category from './components/Category';
import React from "react";
import logo from "./assets/big_politips.png";
import "./App.css";
import HomeSteps from "./components/HomeSteps";
import Navbar from "./components/Navbar";
import "./styles/reset.css";
import "./styles/helpers.css";
import ApiFetching from "./ApiFetching.js";

function App() {

  ApiFetching.apiAll();
  ApiFetching.apiTheme();
  ApiFetching.apiCategory();
  ApiFetching.apiCategoryId(1); 

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
