const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", playRound);
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", playRound);
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", playRound);
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const currentGameText = document.querySelector("#currentGame");
const gameSet = document.querySelector("#gameSet");

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(buttonClicked) {
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    let result = "";

    //Compare player's choice to both rock, paper, and scissors- then return who won
    if (playerSelection == "rock") {

        if (computerSelection == "rock") {
            result = "Tie";
        }
        else if (computerSelection == "paper") {
            result = "Lose";
        }
        else {
            result = "Win";
        }
    }
    else if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            result = "Win";
        }       
        else if (computerSelection == "paper") {
            result = "Tie";
        }
        else {
            result = "Lose";
        }
    }
    else {
        if (computerSelection == "rock") {
            result = "Lose";
        }
        else if (computerSelection == "paper") {
            result = "Win";
        }
        else {
            result = "Tie";
        }
    }

    game(playerSelection, computerSelection, result);
}

function game(playerSelection, computerSelection, result) {
    let playerScore = Number(playerScoreText.innerHTML);
    let computerScore = Number(computerScoreText.innerHTML);

    if (gameSet.innerText != "") {
        playerScore = 0;
        playerScoreText.innerHTML = "0";
        computerScore = 0;
        computerScoreText.innerHTML = "0";
        gameSet.innerText = "";
    }

    if (result == "Win") {
        playerScoreText.innerHTML = playerScore += 1;
        currentGameText.innerHTML = `Computer chose ${computerSelection}; you win!`
    }
    else if (result == "Lose") {
        computerScoreText.innerHTML = computerScore += 1;
        currentGameText.innerHTML = `Computer chose ${computerSelection}; you lose!`
    }
    else {
        currentGameText.innerHTML = `It's a tie!`;
    }

    if (playerScore == 5) {
        gameSet.innerText = `Congratulations, you've won the set!`;
    }
    if (computerScore == 5) {
        gameSet.innerText = `Sorry, you've lost the set!`;
    }
}