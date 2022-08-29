import React from "react";
import Politique from '../assets/Politique.png'
import '../css/Kouizh.css'

class Kouizh extends React.Component{

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
            <div className="container-quiz">
                <div className="container-question">
                    <img className="illustration-question" src={Politique}></img>
                    <h2>Test</h2>
                    {/* <h2>{this.quiz.question}</h2> */}
                </div>
                <div className="container-choices">
                    {/* {this.quiz.choices.forEach( (element) =>
                        <button className="choice">
                            {element.answer}
                        </button>
                    )}  */}
                    <button className="choice">
                        Test 1
                    </button>
                    <button className="choice">
                        Test 2
                    </button>
                    <button className="choice">
                        Test 3
                    </button>
                </div>
            </div>
            )}

}


export default Kouizh