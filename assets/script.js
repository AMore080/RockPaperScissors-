let playerSelection;

const RPS = ["rock","paper","scissors"]

getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * RPS.length);
    console.log(RPS[randomChoice])
    return RPS[randomChoice];
}

let computerSelection;

playRound = (playerSelection,computerSelection) => {
    computerSelection = getComputerChoice();
    playerSelection = prompt("R, P ,S");
    console.log(playerSelection)
    playerSelection.toLowerCase();
    
    if(playerSelection == 'rock' && computerSelection == "scissors"){
        return "You win this round!";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win this round!";
    } else if(playerSelection == "scissors" && computerSelection == 'paper'){
        return "You win this round!";
    } else if(playerSelection === computerSelection){
        return "TIE!";
    } else {
        return "You LOST!";
    }
}

game = () => {
    for(let i = 0; i < 5; i++){
        playRound();
    }
    return;
}


game();