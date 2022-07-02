const btn = document.querySelectorAll("button");
const result = document.querySelector("#result");
const pScore = document.querySelector("#p-score");
const cScore = document.querySelector("#c-score");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        evaluate(button.id, computerPlay());
    });
});

const playerChoice = document.querySelectorAll(".playerchoice");
playerChoice.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.classList.toggle("glow");
        console.log(button.id);
    },
    button.addEventListener("mouseout", () => {
        button.classList.toggle("glow");
    }));
});

const compRock = document.querySelector("#comprock");
const compPaper = document.querySelector("#comppaper");
const compScissors = document.querySelector("#compscissors");

function computerPlay() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    if(randomNum == 1) {
        return "Rock";
    } else if(randomNum == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let playerScore = 0;
let compScore = 0;

function evaluate(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let message;

    if(playerSelection == computerSelection) {
        message = "Tie round! You both chose " + playerSelection;
    } else if((playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
                (playerSelection == "PAPER" && computerSelection == "ROCK") || 
                (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        message = "Player wins round! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else {
        message = "Computer wins round! " + computerSelection + " beats " + playerSelection;
        compScore++;
    }

    if(computerSelection == "ROCK") {
        compRock.classList.add("glow");
        compPaper.classList.remove("glow");
        compScissors.classList.remove("glow");
    } else if(computerSelection == "PAPER") {
        compRock.classList.remove("glow");
        compPaper.classList.add("glow");
        compScissors.classList.remove("glow");
    } else {
        compRock.classList.remove("glow");
        compPaper.classList.remove("glow");
        compScissors.classList.add("glow");
    }

    result.textContent = message;
    pScore.textContent = "Player: " + playerScore;
    cScore.textContent = "Computer: " + compScore;
}



