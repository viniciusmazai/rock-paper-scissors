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
      alert("It's a tie!");
    } else if (winConditions[humanChoice] === computerChoice) {
      alert(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      alert(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  function playGame() {
    for (let i = 0; i < 5; i++) {
      playRound(getHumanChoice(), getComputerChoice());
      alert(`Score: Human: ${humanScore}, Computer: ${computerScore}`);
    }
  
    if (humanScore > computerScore) {
      alert(`You won the game! Score: ${humanScore} x ${computerScore}`);
    } else if (computerScore > humanScore) {
      alert(`Computer won the game! Score: ${humanScore} x ${computerScore}`);
    } else {
      alert(`It's a tie game! Score: ${humanScore} x ${computerScore}`);
    }
  }
  
  playGame();