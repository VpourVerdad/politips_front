import React from "react";
import {useState , useEffect, useCallback} from "react";
import Politique from '../assets/Politique.png'
import '../styles/Quiz.css';
import { useParams, useLocation,useNavigate} from "react-router-dom";
import ApiFetching from "../ApiFetching";


const Quiz = () => {

    const  {id} = useParams();
    
    const navigate = useNavigate();
    const handleNav = useCallback(() => navigate('/', {replace: true}), [navigate]);  
    const location = useLocation();

   
    const [quizzes, setQuizzes] = useState(location.state.quizzes);
    const [question, setQuestion] = useState([]);
    const [choices, setChoices] = useState([]);
    const [explanation, setExplanation] = useState("Pas d'explications pour cette question");
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    const [contentExplanationButton, setContentExplanationButton] = useState('Prochaine Question !');
    
    
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
    
        async function fetchData(){
          try {
            const tempQuestion = (await ApiFetching.apiQuiz(quizzes[currentQuiz].id))
            setChoices(ApiFetching.shuffle(tempQuestion.choices))
            setQuestion(tempQuestion)
          } catch (error) {
            console.error(error);
          }
            
        }
        console.log("test")
        fetchData();
      }, [currentQuiz]);


    useEffect(() => {
        if (hasAnswered){
            setTimeout(() => {
                checkAnswer()
            }, 1000);
        }
    }, [userAnswer]);

    


    const nextQuestion = () =>{
        setHasAnswered(false)
        setQuestion('')
        setUserAnswer('')
        closeExplanation();
        console.log(currentQuiz,quizzes.length)
        setCurrentQuiz(currentQuiz+1)
        if (currentQuiz +2 === quizzes.length){
            setContentExplanationButton('Retourner au menu des thèmes !')
        }
        if (currentQuiz+1 === quizzes.length){
            
            handleNav();
        }
        
            
        
    }

    const checkAnswer = async () => {
        let choicesHTMLElement = document.querySelectorAll('button');
        const correctAnswer = await ApiFetching.apiResults(quizzes[currentQuiz].id)
        setExplanation( await correctAnswer[0].explanation)
        choicesHTMLElement.forEach(async (element,index)=>{
            
            if (choices[index].id === await correctAnswer[0].id){
                element.classList.add('correctAnswer')
            }
            else if (element.innerText === userAnswer && choices[index].id !== await correctAnswer[0].id){
                
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

    


    if (question.length === 0){
        return(
            <section className="waiting">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </section>
        )
    }
    else {

        return(
            <div className="container-quiz">
                
                {showExplanation?<div className="explanation" ><p>{explanation}</p><button onClick={nextQuestion}>{contentExplanationButton}</button></div>:""}
                <div className="container-question">
                    <img alt="Politique" className="illustration-question" src={Politique}></img>
                    <h3>{question.question}</h3> 
                    {/* <h2>{this.quiz.question}</h2> */}
                </div>
                <div className="container-choices">
                    {question.choices.map( (element,index) =>{
                        
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
}

export default Quiz;