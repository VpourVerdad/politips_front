import React from "react";
import Politique from '../assets/Politique.png'
import '../styles/Category.css'
import { Link } from "react-router-dom";
class Category extends React.Component{

    constructor(props){
        super(props); 
        this.data = [
            {
                'name' : "Politique",
                'image' : Politique
            }
        ]
    }

    render(){
        return(
            <div className="grid-category">
                {this.data.map((element,index) => 
                <div className ="category-container" style={{ backgroundImage: element.image }}>
                   <Link to={element.name}>{element.name}</Link>
                </div>
                   
                )}
            </div>
            )}

}


export default Category