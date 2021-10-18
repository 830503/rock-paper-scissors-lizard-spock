const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDispaly = document.getElementById("result");
const possibleChoices = document.querySelectorAll("img");
const randomChoices = document.getElementById("random");
let userChoice;
let randomChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) => {
    userChoice = possibleChoices.value;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

randomChoices.addEventListener("click", (e) => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    randomChoice = randomNumber;
    userChoiceDisplay.innerHTML = randomChoice;
    generateComputerChoice();
})

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if(randomNumber === 1){
        computerChoice = "Rock";
    }
    if(randomNumber === 2){
        computerChoice = "Paper";
    }
    if(randomNumber === 3){
        computerChoice = "Scissors";
    }
    if(randomNumber === 4){
        computerChoice = "Lizard";
    }
    if(randomNumber === 5){
        computerChoice = "Spock";
    }   
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = "It's a draw! "
    }
    if(computerChoice === "rock" && userChoice === "paper"){
        result = "You win! "
    }
    if(computerChoice === "rock" && userChoice === "scissors"){
        result = "You loss! "
    }
    if(computerChoice === "paper" && userChoice === "scissors"){
        result = "You win! "
    }
    if(computerChoice === "paper" && userChoice === "rock"){
        result = "You loss! "
    }
    if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You win! "
    }
    if(computerChoice === "scissors" && userChoice === "paper"){
        result = "You loss! "
    }
    resultDispaly.innerHTML = result;
}
