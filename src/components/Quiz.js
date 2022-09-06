import React from "react";
import {useState , useEffect} from "react";
import Politique from '../assets/Politique.png'
import '../styles/Quiz.css';
import { useParams, useLocation} from "react-router-dom";
import ApiFetching from "../ApiFetching";


const Quiz = () => {

    const  {id} = useParams();
    
    const location = useLocation();

   
    const [quizzes, setQuizzes] = useState(location.state.quizzes);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    
    
    

    const handleClick = (event) => {
        
        let choices = document.querySelectorAll('button');
        choices.forEach((element) => {
            element.classList.remove('choice')
            element.onclick = null;
            if (element === event.target){
                setUserAnswer(event.target.innerText)     
            }
            
        })
        setHasAnswered(true);
       

        
    }

    useEffect(() => {
        if (hasAnswered){
            setTimeout(() => {
                checkAnswer()
            }, 1000);
        }
    }, [userAnswer]);


    const nextQuestion = () =>{
        setCurrentQuiz(currentQuiz+1)
    }

    const checkAnswer = () => {
        console.log(userAnswer)
        let choices = document.querySelectorAll('button');
        choices.forEach((element,index)=>{
            if (quizzes[currentQuiz].choices[index].isCorrect){
                element.classList.add('correctAnswer')
            }
            else if (element.innerText === userAnswer && !quizzes[currentQuiz].choices[index].isCorrect){
                
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
            {showExplanation?<div className="explanation" ><p>{quizzes[currentQuiz].explanation}</p><button onClick={nextQuestion}>Question suivante !</button></div>:""}
            <div className="container-question">
                <img alt="Politique" className="illustration-question" src={Politique}></img>
                <h3>{quizzes[currentQuiz].question}</h3> 
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
                        console.log(element.answer,userAnswer)
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