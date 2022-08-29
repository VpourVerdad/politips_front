import React from "react";
import "../styles/WelcomeSteps.css";
import arrow from "../assets/arrow-right-solid.svg";
import {useState} from "react";

const WelcomeSteps = () => {

        const Words=[
            {id:0, value:"Bienvenue sur Politips !"},
            {id:1, value:"Deviens un super citoyen !"},
            {id:2, value:"Qu'est-ce que t'attends ?"},];
        
            const textWords=[
            {id:0, value:"pose un nouveau regard sur le monde en apprenant à le comprendre"},
            {id:1, value:"le savoir, c'est le pouvoir', alors on prend ça très au sérieux! n'attends plus et commence à apprendre !"},
            {id:2, value:"On t'as dit de commencer, arrête de perdre du temps et fonce"},
            ]

        const [WordsData,setWordsData]=useState(Words[0].value)
        const [textWordsData,setTextWordsData]=useState(textWords[0].value)

        const handleClick=(index)=>{
            // console.log(index)
            const wordSlider=Words[index].value;
            setWordsData(wordSlider)
            const wordTextSlider=textWords[index].value;
            setTextWordsData(wordTextSlider)
        }
        return (
            <div className="text-welcome">
                <h2>{WordsData}</h2>
                <p>{textWordsData}</p>
                <div className="bars-steps">
                {Words.map((data,i)=>
                <span className="bar" onClick={()=>handleClick(i)}></span>)}
                </div>
                <div className="img-arrow">
                <img src={arrow} className="arrow" alt="arrow"/>
                </div>
            </div>
        );
    }
    export default WelcomeSteps;
