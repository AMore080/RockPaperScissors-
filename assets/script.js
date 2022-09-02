let playerSelection;
let computerSelection;
const RPS = ["rock","paper","scissors"]

getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * RPS.length);
    console.log(RPS[randomChoice])
    return RPS[randomChoice];
}

playGame = () => {
    
}

getComputerChoice();