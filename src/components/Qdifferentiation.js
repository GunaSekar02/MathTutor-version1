import React,{useState} from "react";
// import Quit from "./Quit";

// import ReactDom from 'react-dom/client';
export default function Progression(){

  
    const [currentQuestion, setCurrentQuestion] = useState(0)
    // const [showScore, setShowScore] = useState(false)
    // const [score, setScore] = useState(0)
    const [hintC, setHint] = useState(0)
    function displayQ(){
      return(
        
      <div className="container mx-3 my-2">
      <div className=' '>
        {currentQuestion+1}.{questions[currentQuestion].questionText}
      </div>
    
    <div className='container '>
      {
        <ul style={{listStyle:'none',paddingLeft:'2px'}}>
          <li ><button  className="btn "  onClick={() => handleAnswerButtonClick(questions[currentQuestion].isCorrect1)}>a) {questions[currentQuestion].answerText1}</button></li>
          <li><button  className="btn "  onClick={() =>handleAnswerButtonClick(questions[currentQuestion].isCorrect2)}>b) {questions[currentQuestion].answerText2}</button></li>
          <li><button  className="btn " onClick={() =>handleAnswerButtonClick(questions[currentQuestion].isCorrect3)}>c) {questions[currentQuestion].answerText3}</button></li>
          <li><button  className="btn " onClick={() =>handleAnswerButtonClick(questions[currentQuestion].isCorrect4)}>d) {questions[currentQuestion].answerText4}</button></li>
        </ul> 
      } 
     </div>
     {<button  className="btn btn-primary"onClick={()=>handleH()}>HINT</button>}

     </div>
)
    }

    function handleH(){
      if(hintC<4) {
        
        setHint(hintC+1);
        console.log(hintC)
        
      }
      
    }
    
    function handleAnswerButtonClick  (isCorrect)  {
      if (isCorrect === true) 
      {  
        // const root=ReactDom.createRoot(document.getElementById("root"));
         setHint(0)
         const nextQuetions = currentQuestion + 1;
          if (nextQuetions < questions.length) setCurrentQuestion(nextQuetions);
          // else root.render(<Quit/>)
  
      }
      }
    




    const questions = [
        {
          questionText: 'find the derivative of sin(5x)',
          answerText1: '5 sin(5x)', isCorrect1: false ,
          answerText2: '5 cos(5x)', isCorrect2: true ,
          answerText3: '5+sin(5x)', isCorrect3: false ,
          answerText4: '5+sin(5x)', isCorrect4: false ,
          hints:[" ",'Hint1-rule/example/ explanation','Hint2-rule/example/ explanation','Hint3-rule/example/ explanation','Hint4-Explanation derivative of ax is a, derivative of sine  function is cosine  function']
          
        },
        
         { 
            questionText: 'find the derivative of tan(5x)',
            answerText1: '5 sec^2(5x)', isCorrect1: true ,
             answerText2: '5 sec(5x)', isCorrect2: false ,
             answerText3: 'x sec^2(5x)', isCorrect3: false ,
             answerText4: '5x sec^2(5x)', isCorrect4: false ,
             hints:[" ",'Hint1-Rule D(sin(ax))=a cos(ax)','Hint2-Example D(sin(6x))= 6 cos(6x)','Hint3-Example D(tan(6x))= 6 sec^2(6x)','Hint4-Explanation derivative of ax is a, derivative of tan function is secant function']
        },
        {
          questionText: 'find the derivative of sec (2x)',
          
            answerText1: '2sec(x) tan (x)', isCorrect1: true ,
            answerText2: 'sec(2x) tan (2x)', isCorrect2: false ,
            answerText3: '2sec(2x) tan (x)', isCorrect3: false ,
            answerText4: '2sec(2x) ', isCorrect4: false ,
            hints:[" ",'Hint1-Rule D(tsec(ax))=a sec(ax)tan(ax)','Hint2-Example D(tsec(5x))=5sec(5x)tan(5x)','Hint3-ExampleD(tsec(6x))=6sec(6x)tan(6x)','Hint4-Explanation derivative of ax is a derivative of sec function is the product of secant function and tan function']
          
        },
        {
          questionText: 'find the derivative of cos(5x)',
          
             answerText1: '5 sin(5x)', isCorrect1: false ,
             answerText2: ' sin(5x)', isCorrect2: false ,
             answerText3: '-x sin(5x)', isCorrect3: false ,
            answerText4: '-5 sin(5x)', isCorrect4: true ,
            hints:[" ",'Hint1-Rule D(cos(ax))= -a sin(ax)','Hint2-Example D(cos(8x))=-8sin(8x)','Hint3-Example D(cos(3x))=-3sin(3x)','Hint4-Explanation derivative of ax is a, derivative of sec  function is the product of secant function and tan function']
          
        },
        {
            questionText: 'derivative of 3x^2',
          
            answerText1: '2x', isCorrect1: false ,
            answerText2: '6x', isCorrect2: true ,
            answerText3: '5x', isCorrect3: false ,
            answerText4: '0', isCorrect4: false ,
            hints:[" ",'Hint1-rule D(x^n)=nx^n-1','Hint-2d(x^2)=2x','Hint3-d(3x)=3','Hint4-derivative of a x^n=a*x^n-1, a is a constant ']
          
        },
        {
          questionText: 'derivative of -6x',
          
            answerText1: '1', isCorrect1: false ,
            answerText2: '0', isCorrect2: false ,
            answerText3: '6', isCorrect3: false ,
            answerText4: '-6', isCorrect4: true ,
            hints:[" ",'Hint1-rule D(x^n)=nx^n-1','Hint2-d(3x)=3','Hint3-d(-3x)=-3','Hint4-derivative of a x^n=a*x^n-1, a is a constant ']
          
        },
        
        {
          questionText: 'find the derivative of 5^x',
          
            answerText1: ' (log 5)', isCorrect1: false ,
            answerText2: 'x*5^x ', isCorrect2: false ,
            answerText3: 'x (log 5)', isCorrect3: false ,
            answerText4: '5^x (log x)', isCorrect4: true ,
            hints:[" ",'Hint1-Rule D(a^x)=a^x ( log a)','Hint2-Example D(7^x)=7^ x( log 7)','Hint3-Example D(8^x)=8^ x(( log 8)','Hint4-Example D(3^x)=3^ x(( log 3)']
          
        },
        {
          questionText: 'Find the derivative of constant a',
          
            answerText1: '1', isCorrect1: false ,
            answerText2: '0', isCorrect2: true ,
            answerText3: '2a', isCorrect3: false ,
            answerText4: '3a', isCorrect4: false ,
            hints:[" ",'Hint1-Rule D(a)=0','Hint2-Example D(7)=0','Hint3-Example D(8)=0','Hint4-Example D(9)=0']
          
        },
        {
          questionText: 'Find the derivative of e^(5x)',
          
            answerText1: 'e^(5x)', isCorrect1: false ,
            answerText2: 'e e^(5x)', isCorrect2: false ,
            answerText3: 'x e^(5x)', isCorrect3: false ,
            answerText4: '5 e^(5x)', isCorrect4: true ,
            hints:[" ",'Hint1-Rule D(e^(ax))=a e^(ax)','Hint2-Rule D(e^(7x))=7 e^(7x)','Hint3-Rule D(e^(8x))=8 e^(8x)','Hint4-Explanation D(ax) = a ,derivatyive of exponential function is itself']
          
        },
        {
          questionText: 'Find the derivative of 5x+6',
          
            answerText1: '5', isCorrect1: true ,
            answerText2: '6', isCorrect2: false ,
            answerText3: '11', isCorrect3: false ,
            answerText4: '30', isCorrect4: false ,
            hints:[" ",'Hint1-Rule D(ax+b)=s','Hint2-Example D(6x+7)=6','Hint3-Example D(4x+7)=4','Hint-Example D(9x+7)=9']
          
        }
      ]
    
    return(
        <div className="container-center  bg-light  p-3" style={{marginTop:'75px',marginLeft:'85px',marginRight:'85px'}}>
            <div className="container bg-light fw-lighter text-center fs-4">
                MCQ's ON PROGRESSION
            </div>
            {displayQ()}
            <div className="container">
            {questions[currentQuestion].hints[hintC]}
            </div>
            
        </div>
            
            
            
                
        


            
        
    )
}