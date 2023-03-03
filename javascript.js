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

// Play a 5 round game of Rock Paper Scissors that keeps score and reports a winner
// or a loser at the end
function Game()
{
    let wins, losses, ties = 0;
    
    console.log("Let's play a Best of 5 game of Rock Paper Scissors!");
    
    for(let i = 0; i < 5; i++)
    {
        let userInput = "";
        let computerSelection = GetComputerChoice();

        while(!UserInputValid(userInput))
        {
            userInput = prompt("Please type either rock, paper, or scissors");
        }

        console.log(`Game ${i} You selected ${userInput} and the computer selected ${computerSelection}`);

        console.log(PlayRound(userInput, computerSelection));
    }
}

//Return whether a user input is valid or not
function UserInputValid(UserInput)
{
    let inputLowerCase = UserInput.toLowerCase();
    if(inputLowerCase === 'rock'|inputLowerCase === 'paper'|inputLowerCase === 'scissors')
        return true;
    else
        return false;
}