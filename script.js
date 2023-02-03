let playerScore = 0;
let computerScore = 0;

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

let result_p = document.getElementById("result");
let playerScore_span = document.getElementById("player-score");
let computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
let finalResult_p = document.getElementById("final-result");

const tutorial = document.querySelector('.tutorial');
const startButton = document.querySelector('.start');
tutorial.classList.add('active');

startButton.addEventListener('click', function () {
    tutorial.classList.remove('active');
});

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];

    // get a random number
    let index = Math.floor(Math.random() * 100) % 3;

    // return one of the three options 
    return choices[index];
} // end computerPlay

function playRound(playerSelection, computerSelection) {

    // compare the value of the player with the value of the computer
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            result_p.innerHTML = "Both chose rock. It's a draw this time";
            rock_div.style.borderColor = "rgb(165, 165, 165)";
            setTimeout(function () { rock_div.style.borderColor = "#fff" }, 500);
        }
        else if (computerSelection == "Paper") {
            computerScore += 1;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML = "Paper beats rock. You lost this round";
            rock_div.style.borderColor = "red";
            setTimeout(function () { rock_div.style.borderColor = "#fff" }, 500);
        }
        else {
            playerScore += 1;
            playerScore_span.innerHTML = playerScore;
            result_p.innerHTML = "Rock beats scissors. You won this round!";
            rock_div.style.borderColor = "green";
            setTimeout(function () { rock_div.style.borderColor = "#fff" }, 500);
        } // end if ... else
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore += 1;
            playerScore_span.innerHTML = playerScore;
            result_p.innerHTML = "Paper beats rock. You won this round!";
            paper_div.style.borderColor = "green";
            setTimeout(function () { paper_div.style.borderColor = "#fff" }, 500);
        }
        else if (computerSelection == "Paper") {
            result_p.innerHTML = "Both chose paper. It's a draw this time";
            paper_div.style.borderColor = "rgb(165, 165, 165)";
            setTimeout(function () { paper_div.style.borderColor = "#fff" }, 500);
        }
        else {
            computerScore += 1;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML = "Scissors beat paper. You lost this round";
            paper_div.style.borderColor = "red";
            setTimeout(function () { paper_div.style.borderColor = "#fff" }, 500);
        } // end if ... else
    }
    else { // player chooses scissors
        if (computerSelection == "Rock") {
            computerScore += 1;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML = "Rock beats scissors. You lost this round";
            scissors_div.style.borderColor = "red";
            setTimeout(function () { scissors_div.style.borderColor = "#fff" }, 500);
        }
        else if (computerSelection == "Paper") {
            playerScore += 1;
            playerScore_span.innerHTML = playerScore;
            result_p.innerHTML = "Scissors beat paper. You won this round";
            scissors_div.style.borderColor = "green";
            setTimeout(function () { scissors_div.style.borderColor = "#fff" }, 500);
        }
        else {
            result_p.innerHTML = "Both chose scissors. It's a draw this time";
            scissors_div.style.borderColor = "rgb(165, 165, 165)";
            setTimeout(function () { scissors_div.style.borderColor = "#fff" }, 500);
        } // end if ... else
    } // end if ... else
} // end playRound

// repeat the game 5 times
// keep track of the score
// in the end, announce the winner if there is one
function game(playerSelection) {
    const computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);

    if (playerScore == 5 || computerScore == 5) {
        // figure out the winner and keep track of score
        if (playerScore > computerScore) {
            announceWinner("You won :) Congratulations!")
        }
        else if (playerScore < computerScore) {
            finalResult_p.innerHTML = "You lost!";
            announceWinner("You lost :( Try again!")
        }
    }
}


// announce winner at the end of the game
function announceWinner(text) {
    const popup = document.querySelector('.popup');
    const resetButton = document.querySelector('.reset');
    popup.classList.add('active');

    finalResult_p.innerHTML = text;
    
    resetButton.addEventListener('click', function () {
        popup.classList.remove('active');
        reset();
    });
}

// reset game 
function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = '';
    finalResult_p.innerHTML = '';
}

rock_div.addEventListener('click', function () {
    game("Rock");
})

paper_div.addEventListener('click', function () {
    game("Paper");
})

scissors_div.addEventListener('click', function () {
    game("Scissors");
})