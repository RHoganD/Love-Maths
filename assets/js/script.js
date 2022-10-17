// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
     //The below syntax is more modern, what it's going  to do is go through our buttons array and return  
       // each element in the array which will be stored in  that variable button on each iteration.   
    for (let button of buttons){ 
        button.addEventListener("click", function(){
                                   //So let's add an if statement, we're going to  check the attribute of the data type to see 
                                   //what its value is.
                                    //And if it's submit, we're going  to display an alert that says, "you clicked submit".  
   if (this.getAttribute("data-type") === "submit") { // Inside the code block 'this' refers to the button that was just clicked
    //alert("You clicked Submit!");                     // so if we click  the addition button then 'this' is referring to that specific button
    //the above code is delete and to use the final code that will code the funcion checkanswer
      checkAnswer();
      }else {                                        
        let gameType = this.getAttribute("data-type");
       // alert(`You clicked ${gameType}`);   //And then we're using the dollar sign and  curly braces to refer to the game type.                                
      runGame(gameType);  //delete the above alert and use the default game to be display.
    }  
   
        });
    }
    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

// Creates two random numbers between 1 and 25
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
} else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
}

}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */

function calculateCorrectAnswer() {
                      //we use inner text to get the  text content of those elements.
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

   let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function multiplyQuestion() {

}
