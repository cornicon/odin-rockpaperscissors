//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function GetComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 900)
    let computerChoice = randomNumber % 3;
    if(computerChoice === 0)
        return 'rock';
    else if(computerChoice === 1)
        return 'paper';
    else
        return 'scissors'
}

// Play Rock Paper Scissors and return a string that declares the winner
function PlayRound(PlayerSelection, ComputerSelection)
{
    // make user input case-insensitive
    let inputLowerCase = PlayerSelection.toLowerCase();

    // game logic
    if(inputLowerCase === 'rock' & ComputerSelection === 'paper')
        return "You Lose!, Paper beats Rock"
    if(inputLowerCase === 'rock' & ComputerSelection === 'scissors')
        return "You Win!!! Rock beats Scissors"
    if(inputLowerCase === 'paper' & ComputerSelection === 'scissors')
        return "You Lose!, Scissors beats Paper"
    if(inputLowerCase === 'paper' & ComputerSelection === 'rock')
        return "You Win!!!, Paper beats Rock"
    if(inputLowerCase === 'scissors' & ComputerSelection === 'rock')
        return "You Lose!, Rock beats Scissors"
    if(inputLowerCase === 'scissors' & ComputerSelection === 'paper')
        return "You Win!!!, Scissors beats Paper"
    else
        return "It's a Tie, You and the computer both selected " + PlayerSelection;
}

