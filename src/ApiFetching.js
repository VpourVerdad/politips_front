import React from "react"
import axios from 'axios'

export default class ApiFetching {

    // récupérer la data de l'api 
static apiAll () {
  axios.get('https://localhost:8000/api')
  .then((res) => console.log(res.data))
  //  .then((data) => console.log(data))
  .catch((err) => console.log(err))
}

    // récupérer les themes 
static apiTheme () {
  axios.get('https://localhost:8000/api/theme')
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
  }

    // récupérer les categories
  static apiCategory () {
    axios.get('https://localhost:8000/api/theme/category')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }
  
  // à partir d'un id récupérer le quizz 
  static apiCategoryId (idQuiz) {
    axios.get('https://localhost:8000/api/theme/category/' + idQuiz)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }

}