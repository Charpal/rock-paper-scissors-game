let userScore = 0;
let cpuScore = 0;
let round = 0;

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

// function game(){
//     let userScore = 0;
//     let cpuScore = 0;
//     for (let i = 0; i < 5; i++){
//         const playerSelection = prompt("Choose rock, paper, or scissors.");
//         const computerSelection = computerPlay();
//         const result = playRound(playerSelection, computerSelection);
//         switch(true){
//             case (result === "Win!"):
//                 userScore++;
//                 console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
//                 break;
//             case (result === "Lose!"):
//                 console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
//                 cpuScore++;
//                 break;
//             default:
//                 console.log(`Tie! ${playerSelection} ties with ${computerSelection}!`)
//         }
//     }
//     outputResults(userScore, cpuScore);
// }

function outputRoundResults(result, playerSelection, computerSelection){
    switch(true){
    case (result === "Win!"):
        userScore++;
        resultContent.textContent = (`You win! ${playerSelection} beats ${computerSelection}! `);
        break;
    case (result === "Lose!"):
        resultContent.textContent = (`You lose! ${playerSelection} loses against ${computerSelection}! `);
        cpuScore++;
        break;
    default:
        resultContent.textContent = (`Tie! ${playerSelection} ties with ${computerSelection}! `)
}
    updateScores();
}

function updateScores(){
    userScoreContainer.textContent = `Player score: ${userScore}`;
    computerScoreContainer.textContent = `CPU score: ${cpuScore}`;
    if (round >= 5){
        outputMatchResults();
    }
}

function outputMatchResults(){
    switch(true){
        case (userScore > cpuScore):
            resultContent.textContent += ("You won the match!");
            break;
        case (cpuScore > userScore):
            resultContent.textContent += ("You lost the match!");
            break;
        default:
            resultContent.textContent += ("It's a tie! No one wins the match!");
    }
    resetMatch();
}

function resetMatch(){
    userScore = 0;
    cpuScore = 0;
    round = 0;
}

const resultContainer = document.querySelector('#results');

const resultContent = document.createElement('div');
resultContainer.append(resultContent);

const userScoreContainer = document.querySelector('#playerScore');
userScoreContainer.textContent = `Player score: ${userScore}`;
resultContainer.append(userScoreContainer);

const computerScoreContainer = document.querySelector('#cpuScore');
computerScoreContainer.textContent = `CPU score: ${cpuScore}`;
resultContainer.append(computerScoreContainer);

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', function(e){
    let computerSelection = computerPlay();
    let playerSelection = 'Rock';
    round++;
    outputRoundResults(playRound(playerSelection, computerPlay()), playerSelection, computerSelection);
});
paperBtn.addEventListener('click', function(e){
    let computerSelection = computerPlay();
    let playerSelection = 'Paper';
    round++;
    outputRoundResults(playRound(playerSelection, computerPlay()), playerSelection, computerSelection);
});
scissorsBtn.addEventListener('click', function(e){
    let computerSelection = computerPlay();
    let playerSelection = 'Scissors';
    round++;
    outputRoundResults(playRound(playerSelection, computerPlay()), playerSelection, computerSelection);
});


//game();