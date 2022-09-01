import React from "react";
import Politique from '../assets/Politique.png'
import '../styles/Quiz.css'

class Quiz extends React.Component{

    constructor(props){
        super(props);
        this.data = [
            {
                'name' : "Politique",
                'image' : Politique
            }
        ];
        this.state = {
            'hasAnswered' : false,
            'showExplanation' : false
        }
        this.choices = [{
            "answer" : 'Test 1',
            "isCorrect" : true
        },
        {
            "answer" : 'Test 2',
            "isCorrect" : false
        },
        {
            "answer" : 'Test 3',
            "isCorrect" : false
        }
        ];

        this.explanation = "test test test test test test test test test test test test test test test test test test test test test test test test  test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test"
        
    }

    handleClick = (event) => {
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
            this.checkAnswer()
        }, 1000);

        this.setState({
            'hasAnswered' : true,
            'userAnswer' : userAnswer
        })
        
    }

    checkAnswer = () => {
        let choices = document.querySelectorAll('button');
        choices.forEach((element,index)=>{
            if (this.choices[index].isCorrect){
                element.classList.add('correctAnswer')
            }
            if (element.innerText === this.state.userAnswer && !this.choices[index].isCorrect){
                element.classList.add('wrongAnswer')
            }
        })
        setTimeout(() => {
            this.addExplanation()
        }, 1500);
    }

    addExplanation = () => {
        this.setState({
            'showExplanation' : true
        })
    }

    closeExplanation = () => {
        this.setState({
            'showExplanation' : false
        })
    }

    render(){
        return(
            <div className="container-quiz">
                {this.state.showExplanation?<div className="explanation" ><p>{this.explanation}</p><button className="next-button" onClick={this.closeExplanation}>Question suivante !</button></div>:""}
                <div className="container-question">
                    <img className="illustration-question" src={Politique}></img>
                    <h3>Test</h3> 
                    {/* <h2>{this.quiz.question}</h2> */}
                </div>
                <div className="container-choices">
                    {this.choices.map( (element,index) =>{
                        
                        if(!this.state.hasAnswered){
                            return(
                                <button className="choice" key={'choice-'+index} onClick={this.handleClick}>
                                    {element.answer}
                                </button>
                            )
                        }
                        else{
                            if(element.answer === this.state.userAnswer){
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


                    

                    
                    {/* <button className="choice" onClick={this.handleClick}>
                        Test 1
                    </button>
                    <button className="choice" onClick={this.handleClick}>
                        Test 2
                    </button>
                    <button className="choice" onClick={this.handleClick}>
                        Test 3
                    </button> */}
                </div>
            </div>
            )}
}


export default Quiz