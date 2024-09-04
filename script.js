function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    const choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return ["rock", "paper", "scissors"].includes(choice) ? choice : getHumanChoice();
}

