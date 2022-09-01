import React from "react";
import Politique from '../assets/Politique.png'
import '../styles/Category.css'

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
                   <a href="/">{element.name}</a>
                </div>
                   
                )}
            </div>
            )}

}


export default Category