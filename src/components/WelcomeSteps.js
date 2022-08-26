import React from "react";
import "../styles/WelcomeSteps.css";
import arrow from "../assets/arrow-right-solid.svg";


export default class WelcomeSteps extends React.Component {
    render() {
        return (
            <div className="text-welcome">
                <h2>Bienvenue sur Politips !</h2>
                <p>Pose un nouveau regard sur le monde en apprenant à le comprendre !</p>
                <div className="bars-steps">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className="img-arrow">
                <img src={arrow} className="arrow" alt="arrow"/>
                </div>
            </div>
        );
    }
}