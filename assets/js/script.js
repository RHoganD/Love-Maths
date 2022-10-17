// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
     //The below syntax is more modern, what it's going  to do is go through our buttons array and return  
       // each element in the array which will be stored in  that variable button on each iteration.   
    for (let button of buttons){ 
        button.addEventListener("click", function(){
    //So let's add an if statement, we're going to  check the attribute of the data type to see what its value is.
//And if it's submit, we're going  to display an alert that says, "you clicked submit".  
   if (this.getAttribute("data-type") === "submit") { //  . Inside the code block 'this' refers  
    alert("You clicked Submit!");                     // to the button that was just clicked so if we click  the addition 
      }else {                                     //button then 'this' is referring to that specific button
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);   //And then we're using the dollar sign and  curly braces to refer to the game type.                                
      }  
   
        });
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
// Creates two random numbers between 1 and 25
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function multiplyQuestion() {

}
