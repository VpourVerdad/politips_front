import React from "react";
import "../styles/homeSteps.css";
import arrow from "../assets/arrow-right-solid.svg";
import {useState} from "react";
import {apiAll}from "../ApiFetching";


const HomeSteps = () => {

        const Words=[
            "Bienvenue sur Politips !",
            "Deviens un super citoyen !",
            "Qu'est-ce que t'attends ?"
        ];
        
        const textWords=[
            "pose un nouveau regard sur le monde en apprenant à le comprendre",
            "le savoir, c'est le pouvoir', alors on prend ça très au sérieux! n'attends plus et commence à apprendre !",
            "On t'as dit de commencer, arrête de perdre du temps et fonce"
        ];
// initilisation de l'etat 
        const [WordsDataIndex, setTextWordsDataIndex] = useState(0);
// function 
        const handleClick=(index)=>{
            setTextWordsDataIndex(index);
        }
        const handleChange=()=>{
            setTextWordsDataIndex($prevState => $prevState+1);
        }
        return (
            <div className="text-welcome">
                <h2>{Words[WordsDataIndex]}</h2>
                <p>{textWords[WordsDataIndex]}</p>
                <div className="bars-steps">
                {Words.map((data,i)=>
                i===WordsDataIndex ? <span key={i} className="bar bar_active" onClick={()=>handleClick(i)}></span> : <span key={i} className="bar" onClick={()=>handleClick(i)}></span>)
                }
                </div>
                {WordsDataIndex < Words.length-1 ? <div className="img-arrow"><img src={arrow} onClick={handleChange} className="arrow" alt="arrow"/></div> : <div className="go-link"> <a href="#">C'est parti !</a></div>}              
            </div>
        );
    }
    export default HomeSteps;
