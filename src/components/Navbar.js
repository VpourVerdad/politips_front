import React from "react";
import Politique from "../assets/Politique.png"
import Ecologie from "../assets/Ecologie.png"
import Economie from "../assets/Economie.webp"
import "../css/Navbar.css"

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.data =  [Politique,Economie,Ecologie];
        this.state={
            currentTheme : 0
        };
    }


    nextTheme = () => {
        this.data.forEach((element,index) => {
            
            if(index === (this.state.currentTheme+1)%3){
                document.querySelector('.gallery').style.transform = 'translateX('+(-100/(this.data.length))*index+'%)';
            }
        });
        console.log(this.state.currentTheme)
        this.setState({
            currentTheme : (this.state.currentTheme+1)%3
        })
        console.log(this.state.currentTheme)
    }

    previousTheme = () => {
        this.data.forEach((element,index) => {
            
            if(index === (this.state.currentTheme+2)%3){
                document.querySelector('.gallery').style.transform = 'translateX('+(-100/this.data.length)*index+'%)';
            }
        });
        this.setState({
            currentTheme : (this.state.currentTheme+2)%3
        })
    }

    render(){
        return(
            <div className="container">
                <div className="gallery-container">
                    <div className="gallery">
                        <img id="theme-0" className="theme" src={Politique}></img>
                        <img id="theme-1" className="theme" src={Economie}></img>
                        <img id="theme-2" className="theme" src={Ecologie}></img>
                    </div>
                </div>
                
                <div className="control-container">
                    <button onClick={this.previousTheme}> Previous !</button>
                    <button onClick={this.nextTheme}> Next !</button>
                </div>
            </div>
            
        );
    }
    
}

export default Navbar