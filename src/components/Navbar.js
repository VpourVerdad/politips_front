import React from "react";
import {useState , useEffect} from "react";
import Politique from "../assets/Politique.png";
import Ecologie from "../assets/Ecologie.png";
import Economie from "../assets/Economie.webp";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import ApiFetching from  "../ApiFetching";


const Navbar = () => {

    const [themes, setThemes] = useState([]);

    const [currentTheme, setCurrentTheme] = useState(0);

    

    useEffect(() => {
        async function fetchData(){
            setThemes([...await ApiFetching.apiTheme()])
        }
        fetchData();
    }, []);
        
    const nextTheme = () => {
        this.data.forEach((element,index) => {
            
            if(index === (currentTheme+1)%themes.length){
                document.querySelector('.gallery').style.transform = 'translateX('+(-100/(themes.length))*index+'%)';
                document.querySelector('#theme'+index).style.opacity = 1;
                document.querySelector('#theme'+(index+themes.length-1)%themes.length).style.opacity = 0;
            }
        });
        console.log(currentTheme)
        setCurrentTheme(
            (currentTheme+1)%themes.length
        )
        console.log(currentTheme)
    }

    const previousTheme = () => {
        this.data.forEach((element,index) => {
            if(index === (currentTheme+themes.length-1)%themes.length){
                document.querySelector('.gallery').style.transform = 'translateX('+(-100/themes.length)*index+'%)';
                document.querySelector('#theme'+index).style.opacity = 1;
                document.querySelector('#theme'+(index+themes.length-1)%themes.length).style.opacity = 0;
            }
        });
        setCurrentTheme(
            (currentTheme+themes.length-1)%themes.length
        )
    }

    return(
        <div className="container">
            <div className="gallery-container">
                <div className="gallery">
                    {themes.map((element,index) => 
                    
                    <Link to={ApiFetching.string_to_slug(element.title)} key={'link-theme'+index}><img id={'theme'+index} key={'theme'+index} alt={element.title} className="theme" src={Politique}></img></Link>
                    )}
                </div>
            </div>
            
            <div className="control-container">
                <button onClick={previousTheme}> Previous !</button>
                <button onClick={nextTheme}> Next !</button>
            </div>
        </div>
        
    );
    
}

export default Navbar
