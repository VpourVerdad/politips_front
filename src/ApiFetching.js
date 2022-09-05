import React from "react"
import axios from 'axios'

export default class ApiFetching {

    // récupérer la data de l'api 
static async apiAll () {
  const res = await axios.get('https://localhost:8000/api')
  .catch((err) => console.log(err));
  return res.data;
}

    // récupérer les themes 
  static async apiTheme () {
    const res = await axios.get('https://localhost:8000/api/theme')
    .catch((err) => console.log(err));
    return res.data;
    }

      // récupérer un theme
  static async apiThemeId (id) {
    const res = await axios.get('https://localhost:8000/api/theme/' + id)
  .catch((err) => console.log(err));
  return res.data;
  }

    // récupérer les categories
  static async apiCategory () {
    const res = await axios.get('https://localhost:8000/api/theme/category')
    .catch((err) => console.log(err));
    return res.data;
  }
  
  // à partir d'un id récupérer une catégorie
  static async apiCategoryId (id) {
    const res = await axios.get('https://localhost:8000/api/theme/category/' + id)
    .catch((err) => console.log(err));
    return res.data;
  }

  // à partir d'un id récupérer un quizz
  static async apiQuiz (id) {
    const res = await axios.get('https://localhost:8000/api/theme/category/quiz/' + id)
    .catch((err) => console.log(err));
    return res.data;
  }

  
  static string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    let to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

}