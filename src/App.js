import React from 'react';
import './styles/reset.css'
import './styles/helpers.css'
import './App.css';
import HomeSteps from './components/HomeSteps';
import Navbar from './components/Navbar';
import Category from './components/Category';
import ApiFetching from "./ApiFetching.js";
import Quiz from './components/Quiz';
import {useState , useEffect} from "react";
import './styles/waiting.css'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    
      async function fetchData(){
        try {
          setData([...await ApiFetching.apiAll()])
        } catch (error) {
          return(error)
        }
          
      }
      fetchData();
    }, []);


  if (data.length !== 0){
    return (
    
      <Routes>
        <Route path="/home" element={<HomeSteps />}/>
      
        <Route path="/:theme"  element={<Category data={data} />}/>

        <Route path="/:theme/:category" />

        <Route path="/:theme/:category/:id" element={<Quiz/>}/>
      
        <Route path="/"  element={<Navbar data={data} />}/>
      
      </Routes>
    );
  }
  else{
    <section class="waiting">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </section>
  }
 
}

export default App;
