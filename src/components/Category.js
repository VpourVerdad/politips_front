import React from "react";
import {useState , useEffect} from "react";
import Politique from '../assets/Politique.png'
import '../styles/category.css'
import { Link } from "react-router-dom";
import ApiFetching from "../ApiFetching";
import { useLocation } from 'react-router-dom'

const Category = (props) => {
    
    const location = useLocation();
    const [category, setCategory] = useState(location.state.categories);

    console.log(category)

    return(
        <div className="container-category">
            <div className="grid-category">
                {category.map((element,index) =>
                <div className ="category-item" key={'category-'+element.id} style={{ backgroundImage: element.image }}>
                    <Link to={ApiFetching.string_to_slug(element.title)+'/'+element.id} state={{ quizzes : element.quizzes }}>{element.title}</Link>
                </div>
                )}
            </div>
        </div>
    )

}


export default Category