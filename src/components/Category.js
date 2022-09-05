import React from "react";
import {useState , useEffect} from "react";
import Politique from '../assets/Politique.png'
import '../styles/category.css'
import { Link } from "react-router-dom";
import ApiFetching from "../ApiFetching";

const Category = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function fetchData(){
            setCategory([...await ApiFetching.apiCategory()])
        }
        fetchData();
    }, []);

    return(
        <div className="container-category">
            <div className="grid-category">
                {category.map((element,index) => 
                <div className ="category-item" key={'category-1'} style={{ backgroundImage: element.image }}>
                <Link to={ApiFetching.string_to_slug(element.title)+"/1"}>{element.title}</Link>
                </div>
                )}
            </div>
        </div>
    )

}


export default Category