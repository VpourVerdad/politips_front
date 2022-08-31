import axios from "axios";
import React from "react";


const Api = () =>{

    let one = "http://localhost:8000/api/"
    let two = "http://localhost:8000/api/theme" 
    let three = "http://localhost:8000/api/theme/category"

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

axios.all([requestOne, requestTwo, requestThree])
    .then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responesThree = responses[2]
    // utiliser ou accéder au résultat 
    
    })).catch(errors => {
    // gestion de l'errors.
    })
}
export default Api ; 