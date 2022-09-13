function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {

        if (computerSelection == "Rock") {
            return "Try again!";
        }
        else if (computerSelection == "Paper") {
            return "You lose! Paper beats rock!";
        }
        else {
            return "You win! Rock beats scissors!";
        }
    }
    else if (playerSelection == "paper") {

        if (computerSelection == "Rock") {
            return "You win! Paper beats rock!";
        }       
        else if (computerSelection == "Paper") {
            return "Try again!";
        }
        else {
            return "You lose! Scissors beats paper!";
        }
    }
    else {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats scissors!";
        }
        else if (computerSelection == "Paper") {
            return "You win! Scissors beats paper!";
        }
        else {
            return "Try again!";
        }
    }
}