function computerPlay(){
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    switch (cpuChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "spock";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"){
        switch(true){
            case (computerSelection === "rock"):
                return "Tie!"
            case (computerSelection === "paper"):
                return "Lose!"
            case (computerSelection === "scissors"):
                return "Win!";
            default:
                return "Illegal move occured."
        }
    }
    else if (playerSelection === "paper"){
        switch(true){
            case (computerSelection === "rock"):
                return "Win!"
            case (computerSelection === "paper"):
                return "Tie!"
            case (computerSelection === "scissors"):
                return "Lose!";
            default:
                return "Illegal move occured."
        }
    }
    else if (playerSelection === "scissors"){
        switch(true){
            case (computerSelection === "rock"):
                return "Lose!"
            case (computerSelection === "paper"):
                return "Win!"
            case (computerSelection === "scissors"):
                return "Tie!";
            default:
                return "Illegal move occured."
        }
    }
    else{
        return "Illegal move occured."
    }
}

function game(){
    let userScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose rock, paper, or scissors.");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        switch(true){
            case (result === "Win!"):
                userScore++;
                console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
                break;
            case (result === "Lose!"):
                console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
                cpuScore++;
                break;
            default:
                console.log(`Tie! ${playerSelection} ties with ${computerSelection}!`)
        }
    }
    outputResults(userScore, cpuScore);
}

function outputResults(userScore, cpuScore){
    switch(true){
        case (userScore > cpuScore):
            console.log("You won the match!");
            break;
        case (cpuScore > userScore):
            console.log("You lost the match!");
            break;
        default:
            console.log("It's a tie! No one wins the match!");
    }
}

game();