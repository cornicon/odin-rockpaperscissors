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