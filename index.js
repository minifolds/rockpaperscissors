const div = document.querySelector('#div');
const pdiv = document.querySelector('#pdiv');
const cdiv = document.querySelector('#cdiv');
let p_win = 0;
let c_win = 0;

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
            return 'tie';
        }
        else if (playerChoice == 'scissor'){
            return 'lose';
        }
        else {
            return 'win';
        }
    }  
    if (computerChoice == 'scissor'){
        if (playerChoice == 'rock'){
            return 'win';
        }
        else if (playerChoice == 'scissor'){
            return 'tie';
        }
        else {
            return 'lose';
        }
    } 
    if (computerChoice == 'paper'){
        if (playerChoice == 'rock'){
            return 'lose';
        }
        else if (playerChoice == 'scissor'){
            return 'win';
        }
        else {
            return 'tie';
        }
    }   
}

function game(move){
    
        const computerSelection = getComputerChoice();
        const playerSelection = move;
        return playRound(playerSelection, computerSelection);
}



const rbtn = document.querySelector('#r');
rbtn.addEventListener('click',() => {
    result = game('rock');
    console.log(result);
    div.textContent = result;
    if (result == "win"){
        p_win +=1;
    
        pdiv.textContent = p_win;
    }
    if (result == "lose"){
        c_win +=1;
   
        cdiv.textContent = c_win;
    }
    if (p_win >= 5){
        div.textContent = "you win";
    }
    if (c_win >= 5){
        div.textContent = "computer wins";
    }
});

const pbtn = document.querySelector('#p');
pbtn.addEventListener('click',() => {
    result = game('paper');
    div.textContent = result;
    if (result == "win"){
        p_win +=1;
        pdiv.textContent = p_win;
    }
    if (result == "lose"){
        c_win +=1;
        cdiv.textContent = c_win;
    }
    if (p_win >= 5){
        div.textContent = "you win";
        
    }
    if (c_win >= 5){
        div.textContent = "computer wins";
    }
});

const sbtn = document.querySelector('#s');
sbtn.addEventListener('click',() => {
    result = game('scissor');
    div.textContent = result;
    if (result == "win"){
        p_win +=1;
        pdiv.textContent = p_win;
    }
    if (result == "lose"){
        c_win +=1;
        cdiv.textContent = c_win;
    }
    if (p_win >=5){
        div.textContent = "you win";
    }
    if (c_win >=5){
        div.textContent = "computer wins";
    }
});




