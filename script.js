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

    //Compare player's choice to both rock, paper, and scissors- then return who won
    if (playerSelection == "rock") {

        if (computerSelection == "Rock") {
            return "Tie";
        }
        else if (computerSelection == "Paper") {
            return "Lose";
        }
        else {
            return "Win";
        }
    }
    else if (playerSelection == "paper") {

        if (computerSelection == "Rock") {
            return "Win";
        }       
        else if (computerSelection == "Paper") {
            return "Tie";
        }
        else {
            return "Lose";
        }
    }
    else {
        if (computerSelection == "Rock") {
            return "Lose";
        }
        else if (computerSelection == "Paper") {
            return "Win";
        }
        else {
            return "Tie";
        }
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;

    //Run 5 rounds
    for (let i = 0; i < 5; i++) {
        let playerSelection = getComputerChoice(); //Since I can't type in my own choice just yet
        let computerSelection = getComputerChoice();

        switch(playRound(playerSelection,computerSelection)) {
            case "Lose":
                compScore++;
                break;
            case "Win":
                playerScore++;
                break;
        }
        console.log(playerSelection,computerSelection);
        console.log(playerScore,compScore);
    }

    //Print the results
    if (playerScore > compScore) {
        console.log("Player wins!");
    }
    else if (compScore > playerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie!");
    }   
}