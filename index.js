function getComputerChoice(){
    var moves = ['rock', 'paper', 'scissor'];
    const choice = moves[Math.floor(Math.random() * moves.length)];
    return choice;
}
function playRound(playerSelection,computerSelection){
    const tie = "it's a tie!";
    const win = "you win!";
    const lose = "you lose!";
    const computerChoice = getComputerChoice();
    const playerChoice = playerSelection.toLowerCase();
    if (computerChoice == 'rock'){
        if (playerChoice == 'rock'){
            return tie;
        }
        else if (playerChoice == 'scissor'){
            return lose;
        }
        else {
            return win;
        }
    }  
    if (computerChoice == 'scissor'){
        if (playerChoice == 'rock'){
            return win;
        }
        else if (playerChoice == 'scissor'){
            return tie;
        }
        else {
            return lose;
        }
    } 
    if (computerChoice == 'paper'){
        if (playerChoice == 'rock'){
            return lose;
        }
        else if (playerChoice == 'scissor'){
            return win;
        }
        else {
            return tie;
        }
    }   
}

function game(){
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = prompt ('select your move!');
        console.log(playRound(playerSelection, computerSelection));

     }
}

game();

