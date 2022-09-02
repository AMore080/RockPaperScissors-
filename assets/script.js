let playerSelection;
let playerBTN = document.querySelectorAll('#playerSelect');
playerBTN.forEach((button) => {
    button.addEventListener('click',()=>{
        playerSelection = (button.textContent)
        game(playerSelection)
    })
})

const RPS = ["rock","paper","scissors"]

getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * RPS.length);
    console.log(RPS[randomChoice])
    return RPS[randomChoice];
}

let computerSelection;

playRound = (playerSelection,computerSelection) => {
    computerSelection = getComputerChoice();
    
    // playerSelection.forEach((button) => {
    //     button.addEventListener('click',()=>{
    //         alert("clicked!")
    //     })
    // })

    console.log(playerSelection)
    
    if(playerSelection == 'rock' && computerSelection == "scissors"){
        console.log("You win this round!");
        return "You win this round!";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win this round!");
        return "You win this round!";
    } else if(playerSelection == "scissors" && computerSelection == 'paper'){
        console.log("You win this round!");
        return "You win this round!";
    } else if(playerSelection === computerSelection){
        console.log("Tie");
        return "TIE!";
    } else {
        console.log("LOSER")
        return "You LOST!";
    }
}

game = (playerSelection) => {

    playRound(playerSelection);
    return;
}