let playerSelection = "rock";

const RPS = ["rock","paper","scissors"]

getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * RPS.length);
    console.log(RPS[randomChoice])
    return RPS[randomChoice];
}

const computerSelection = getComputerChoice();

playRound = (playerSelection,computerSelection) => {
    playerSelection.toLowerCase();

    if(playerSelection == 'rock' && computerSelection == "scissors"){
        return "You win this round!";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win this round!";
    } else if(playerSelection == "scissors" && computerSelection == 'paper'){
        return "You win this round!";
    } else {
        return "You LOST!";
    }
}

getComputerChoice();
console.log(playRound(playerSelection,computerSelection))