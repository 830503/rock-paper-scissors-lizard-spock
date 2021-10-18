var userScore = 0;
var computerScore = 0;
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");

const resultDispaly = document.getElementById("result");

const reset = document.getElementById("reset");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const random = document.getElementById("random");


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

function win(){
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDispaly.innerHTML = "You win!"
}

function loss(){
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
    userScoreDisplay.innerHTML = userScore;
    resultDispaly.innerHTML = "You loss!"
}

function draw(){
    resultDispaly.innerHTML = "Its a draw!"
}


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
            win(userChoice, computerChoice);
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
            loss(userChoice, computerChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "lizardlizard":
        case "spockpock":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
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
            win(randomChoice, computerChoice);
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
            loss(randomChoice, computerChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "lizardlizard":
        case "spockpock":
        case "scissorsscissors":
            draw(randomChoice, computerChoice);
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

      reset.addEventListener("click", function(){
        window.location.reload("Refresh");
         
     })

}
main(); 

