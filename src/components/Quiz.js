import React from "react";
import {useState , useEffect} from "react";
import Politique from '../assets/Politique.png'
import '../styles/Quiz.css';
import { useParams } from "react-router-dom";
import ApiFetching from "../ApiFetching";


const Quiz = () => {

    const  {id} = useParams();
    

    const [quizzes, setQuizzes] = useState([]);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [userAnswer,setUserAnswer] = useState("");
    

    useEffect(() => {
        console.log(id)
        async function fetchData(){
            setQuizzes([...await ApiFetching.apiCategoryId(id)])
        }
        fetchData();
    }, [id]);

    const handleClick = (event) => {
        let userAnswer
        let choices = document.querySelectorAll('button');
        choices.forEach((element) => {
            element.classList.remove('choice')
            element.onclick = null;
            if (element === event.target){
                element.classList.add('selected')
                userAnswer = event.target.innerText                
            }
            else{
                element.classList.add('notChosen')
            }
            
        })
        setTimeout(() => {
            checkAnswer()
        }, 1000);

        setUserAnswer(userAnswer);
        setHasAnswered(true);
    }


    const nextQuestion = () =>{
        setCurrentQuiz(currentQuiz+1)
    }

    const checkAnswer = () => {
        let choices = document.querySelectorAll('button');
        choices.forEach((element,index)=>{
            if (quizzes[currentQuiz].choices[index].isCorrect){
                element.classList.add('correctAnswer')
            }
            if (element.innerText === userAnswer && !quizzes[currentQuiz].choices[index].isCorrect){
                element.classList.add('wrongAnswer')
            }
        })
        setTimeout(() => {
            addExplanation()
        }, 1500);
    }

    const addExplanation = () => {
        setShowExplanation(true)
    }

    const closeExplanation = () => {
        setShowExplanation(false)
    }


    return(
        <div className="container-quiz">
            {showExplanation?<div className="explanation" ><p>{quizzes[currentQuiz].explanation}</p><button onclick={nextQuestion}>Question suivante !</button></div>:""}
            <div className="container-question">
                <img alt="Politique" className="illustration-question" src={Politique}></img>
                <h3>Test</h3> 
                {/* <h2>{this.quiz.question}</h2> */}
            </div>
            <div className="container-choices">
                {quizzes[currentQuiz].choices.map( (element,index) =>{
                    
                    if(!hasAnswered){
                        return(
                            <button className="choice" key={'choice-'+index} onClick={handleClick}>
                                {element.answer}
                            </button>
                        )
                    }
                    else{
                        if(element.answer === userAnswer){
                            return(
                                <button className="chosen" key={'choice-'+index} >
                                    {element.answer}
                                </button>
                            )
                        }
                        else{
                            return(
                                <button className="notChosen" key={'choice-'+index} >
                                        {element.answer}
                                    </button>
                            )
                        }
                        
                        
                    }
                        
                })
                }

            </div>
        </div>
    )
}

export default Quiz;