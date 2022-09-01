import React from "react";
import Politique from "../assets/Politique.png";
import Ecologie from "../assets/Ecologie.png";
import Economie from "../assets/Economie.webp";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';



class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.data = [{"src" : Politique ,'name' : 'Politique' },{"src" : Ecologie ,'name' : 'Ecologie' },{"src" : Economie ,'name' : 'Economie' }];
        this.state={
            currentTheme : 0
        };
    }


    nextTheme = () => {
        this.data.forEach((element,index) => {
            
            if(index === (this.state.currentTheme+1)%this.data.length){
                document.querySelector('.gallery').style.transform = 'translateX('+(-100/(this.data.length))*index+'%)';
                document.querySelector('#theme'+index).style.opacity = 1;
                document.querySelector('#theme'+(index+this.data.length-1)%this.data.length).style.opacity = 0;
            }
        });
        console.log(this.state.currentTheme)
        this.setState({
            currentTheme : (this.state.currentTheme+1)%this.data.length
        })
        console.log(this.state.currentTheme)
    }

    previousTheme = () => {
        this.data.forEach((element,index) => {
            if(index === (this.state.currentTheme+this.data.length-1)%this.data.length){
                document.querySelector('.gallery').style.transform = 'translateX('+(-100/this.data.length)*index+'%)';
                document.querySelector('#theme'+index).style.opacity = 1;
                document.querySelector('#theme'+(index+this.data.length-1)%this.data.length).style.opacity = 0;
            }
        });
        this.setState({
            currentTheme : (this.state.currentTheme+this.data.length-1)%this.data.length
        })
    }

    render(){
        return(
            <div className="container">
                <div className="gallery-container">
                    <div className="gallery">
                        {this.data.map((element,index) => 
                           <Link to={element.name}><img id={'theme'+index} key={'theme'+index} alt={element.name} className="theme" src={element.src}></img></Link>
                        )}
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
