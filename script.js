const userScore = 0;
const computerScore = 0;
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDispaly = document.getElementById("result");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const random = document.getElementById("random");

/*let userChoice;
let randomChoice;
let computerChoice;
let result;*/
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors", "lizard ", "spock"];
    const randomNumber = Math.floor(Math.random() * 5); 
    return choices[randomNumber];
}
getComputerChoice();

function getRandomChoice(){
    const choices = ["rock", "paper", "scissors", "lizard ", "spock"];
    const randomNumber = Math.floor(Math.random() * 5); 
    return choices[randomNumber];
}
getRandomChoice();


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "scissorspaper":
        case "paperrock":
        case "rocklizard":
        case "lizardspock":
        case "spockscissors":
        case "scissorslizard":
        case "lizardpaper":
        case "paperspock":
        case "spockrock":
        case "rockscissors":
           resultDispaly.innerHTML = "You win!";
            break;
        case "paperscissors":
        case "rockpaper":
        case "lizardrock":
        case "spocklizard":
        case "scissorsspock":
        case "lizardscissors":
        case "paperlizard":
        case "spockpaper":
        case "rockspock":
        case "scissorsrock":  
            resultDispaly.innerHTML = "You loss!";
            break;
        case "paperpaper":
        case "rockrock":
        case "lizardlizard":
        case "spockpock":
        case "scissorsscissors":
            resultDispaly.innerHTML = "Its a draw!";
            break;
    }
}

function gameRandom(){
    const computerChoice = getComputerChoice();
    const randomChoice = getRandomChoice(); 
    switch (randomChoice + computerChoice){
        case "scissorspaper":
        case "paperrock":
        case "rocklizard":
        case "lizardspock":
        case "spockscissors":
        case "scissorslizard":
        case "lizardpaper":
        case "paperspock":
        case "spockrock":
        case "rockscissors":
           resultDispaly.innerHTML = "You win!";
            break;
        case "paperscissors":
        case "rockpaper":
        case "lizardrock":
        case "spocklizard":
        case "scissorsspock":
        case "lizardscissors":
        case "paperlizard":
        case "spockpaper":
        case "rockspock":
        case "scissorsrock":  
            resultDispaly.innerHTML = "You loss!";
            break;
        case "paperpaper":
        case "rockrock":
        case "lizardlizard":
        case "spockpock":
        case "scissorsscissors":
            resultDispaly.innerHTML = "Its a draw!";
            break;
    }
}

function main(){
    rock.addEventListener("click", function(){
        game("rock");
         
     })
     paper.addEventListener("click", function(){
         game("paper");
          
      })
      scissors.addEventListener("click", function(){
         game("scissors");
          
      })
      lizard.addEventListener("click", function(){
         game("lizard");
          
      })
      spock.addEventListener("click", function(){
         game("spock");
          
      })
     
      random.addEventListener("click", function(){
         gameRandom("");
          
      })
}
main(); 

