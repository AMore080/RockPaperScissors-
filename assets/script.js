let playerSelection;
const playerBTN = document.querySelectorAll('#playerSelect');
const results = document.querySelector("#resultText")

//Depending on the btn clicked, the game starts
playerBTN.forEach((button) => {
    button.addEventListener('click',()=>{
        playerSelection = (button.textContent.toLowerCase())
        game(playerSelection)
    })
})

//Choices the comp can choose
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

    results.textContent = "";
    
    if(playerSelection == 'rock' && computerSelection == "scissors"){
        console.log("You win this round!");
        document.body.style.backgroundColor = "green";
        const resultBox = document.createElement('h2');
        resultBox.classList.add("font-serif","text-4xl", "text-center", "pb-40","pt-20")
        const textbox = document.createTextNode("You win this round!");
        resultBox.append(textbox)
        results.appendChild(resultBox);
        return "You win this round!";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win this round!");
        document.body.style.background = "green";
        const resultBox = document.createElement('h2');
        resultBox.classList.add("font-serif","text-4xl", "text-center", "pb-40","pt-20")
        const textbox = document.createTextNode("You win this round!");
        resultBox.append(textbox)
        results.appendChild(resultBox);
        return "You win this round!";
    } else if(playerSelection == "scissors" && computerSelection == 'paper'){
        console.log("You win this round!");
        document.body.style.background = "green";
        const resultBox = document.createElement('h2');
        resultBox.classList.add("font-serif","text-4xl", "text-center", "pb-40","pt-20")
        const textbox = document.createTextNode("You win this round!");
        resultBox.append(textbox)
        results.appendChild(resultBox);
        return "You win this round!";
    } else if(playerSelection === computerSelection){
        console.log("Tie");
        document.body.style.background = "gray";
        const resultBox = document.createElement('h2');
        resultBox.classList.add("font-serif","text-4xl", "text-center", "pb-40","pt-20")
        const textbox = document.createTextNode("TIE!");
        resultBox.append(textbox)
        results.appendChild(resultBox);
        return "TIE!";
    } else {
        console.log("LOSER")
        document.body.style.background = "red";
        const resultBox = document.createElement('h2');
        resultBox.classList.add("font-serif","text-4xl", "text-center", "pb-40","pt-20")
        const textbox = document.createTextNode("You lost this round!");
        resultBox.append(textbox)
        results.appendChild(resultBox);
        return "You LOST!";
    }
}

game = (playerSelection) => {

    playRound(playerSelection);
    return;
}