// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const result = document.getElementById('results');
const seriesResult = document.getElementById('seriesResults');
const winsLabel = document.getElementById('wins');
const lossesLabel = document.getElementById('losses');
const tiesLabel = document.getElementById('ties');

let wins = 0;
let losses = 0;
let ties = 0;
let roundNumber = 0;

result.innerHTML = "Click any button to start a best of 5 game of Rock, Paper, Scissors!";

// forEach to iterate through each button
// add a click listener for each one
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'btnRock')
        {
            let outcome = PlayRound('rock', GetComputerChoice());
            ParseOutcome(outcome);
        }  
        if(button.id === 'btnPaper')
        {
            let outcome = PlayRound('paper', GetComputerChoice());
            ParseOutcome(outcome);
        }
        if(button.id === 'btnScissors')
        {
            let outcome = PlayRound('scissors', GetComputerChoice());
            ParseOutcome(outcome);
        }
    });
});

function ParseOutcome(Outcome)
{
        seriesResult.innerHTML = "";

        // increment depending on outcome and update result, wins, losses, ties
        if (Outcome.charAt(4) === 'W')
        {
            wins++;
        }
        else if(Outcome.charAt(4) === 'L')
        {
            losses++;
        }
        else
        {
            ties++;
        }

        winsLabel.innerHTML = `${wins} Wins`;
        lossesLabel.innerHTML = `${losses} Losses`;
        tiesLabel.innerHTML = `${ties} Ties`;

        if(wins < 5 && losses < 5)
        {
            result.innerHTML = Outcome;
        }
        else
        {
            seriesResult.innerHTML = WinLoseDraw(wins, losses);
            wins = 0;
            losses = 0;
            ties = 0;
        }
        
}
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
function ConsoleGame()
{
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let roundNumber = 0;
    
    console.log("Let's play a Best of 5 game of Rock Paper Scissors!");
    
    while(wins < 5 && losses < 5)
    {
        roundNumber++;
        let userInput = "";
        let computerSelection = GetComputerChoice();

        while(!UserInputValid(userInput))
        {
            userInput = prompt("Please type either rock, paper, or scissors");
        }

        console.log(`Game ${roundNumber} You selected ${userInput} and the computer selected ${computerSelection}`);

        let outcome = PlayRound(userInput, computerSelection);

        // increment depending on outcome
        if (outcome.charAt(4) === 'W')
            wins++;
        else if(outcome.charAt(4) === 'L')
            losses++;
        else
            ties++;

        console.log(outcome);
    }

    console.log(`Wins: ${wins} Losses ${losses} Ties ${ties}`);
    console.log(WinLoseDraw(wins, losses));
}

function WinLoseDraw(Wins, Losses)
{
    if (Wins > Losses)
        return "Congratulations! You Won the best of 5!";
    else if(Losses > Wins)
        return "Sorry, The Computer Won the best of 5. Better Luck Next Time";
    else
        return "It was a long hard fought Tie Game in the best of 5";
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