function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    const choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return ["rock", "paper", "scissors"].includes(choice) ? choice : getHumanChoice();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const winConditions = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock"
    };
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (winConditions[humanChoice] === computerChoice) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  function playGame() {
    for (let i = 0; i < 5; i++) {
      playRound(getHumanChoice(), getComputerChoice());
      console.log(`Score: Human: ${humanScore}, Computer: ${computerScore}`);
    }
  
    if (humanScore > computerScore) {
      console.log("You won the game!");
    } else if (computerScore > humanScore) {
      console.log("Computer won the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  