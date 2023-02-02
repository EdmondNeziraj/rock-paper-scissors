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



function computerPlay() {
    // get a random number
    let index = Math.floor(Math.random() * 100) % 3;
    const choices = ["Rock", "Paper", "Scissors"];

    console.log(index);
    console.log(choices[index]);

    // return one of the three options 
    return choices[index];
} // end computerPlay

// score counters
//let playerScore = 0;
//let computerScore = 0;
function playRound(playerSelection, computerSelection) {

    // compare the value of the player with the value of the computer
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            result_p.innerHTML = "Both chose rock. It's a draw!";
            rock_div.style.borderColor = "rgb(165, 165, 165)";
            setTimeout(function () { rock_div.style.borderColor = "whitesmoke" }, 500);
        }
        else if (computerSelection == "Paper") {
            computerScore += 1;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML = "Paper beats rock. You lose!";
            rock_div.style.borderColor = "red";
            setTimeout(function () { rock_div.style.borderColor = "whitesmoke" }, 500);
        }
        else {
            playerScore += 1;
            playerScore_span.innerHTML = playerScore;
            result_p.innerHTML = "Rock beats scissors. You win!";
            rock_div.style.borderColor = "green";
            setTimeout(function () { rock_div.style.borderColor = "whitesmoke" }, 500);
        } // end if ... else
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore += 1;
            playerScore_span.innerHTML = playerScore;
            result_p.innerHTML = "Paper beats rock. You win!";
            paper_div.style.borderColor = "green";
            setTimeout(function () { paper_div.style.borderColor = "whitesmoke" }, 500);
        }
        else if (computerSelection == "Paper") {
            result_p.innerHTML = "Both chose paper. It's a draw!";
            paper_div.style.borderColor = "rgb(165, 165, 165)";
            setTimeout(function () { paper_div.style.borderColor = "whitesmoke" }, 500);
        }
        else {
            computerScore += 1;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML = "Scissors beat paper. You lose!";
            paper_div.style.borderColor = "red";
            setTimeout(function () { paper_div.style.borderColor = "whitesmoke" }, 500);
        } // end if ... else
    }
    else { // player chooses scissors
        if (computerSelection == "Rock") {
            computerScore += 1;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML = "Rock beats scissors. You lose!";
            scissors_div.style.borderColor = "red";
            setTimeout(function () { scissors_div.style.borderColor = "whitesmoke" }, 500);
        }
        else if (computerSelection == "Paper") {
            playerScore += 1;
            playerScore_span.innerHTML = playerScore;
            result_p.innerHTML = "Scissors beat paper. You win!";
            scissors_div.style.borderColor = "green";
            setTimeout(function () { scissors_div.style.borderColor = "whitesmoke" }, 500);
        }
        else {
            result_p.innerHTML = "Both chose scissors. It's a draw!";
            scissors_div.style.borderColor = "rgb(165, 165, 165)";
            setTimeout(function () { scissors_div.style.borderColor = "whitesmoke" }, 500);
        } // end if ... else
    } // end if ... else
} // end playRound

// repeat the game 5 times
// keep track of the score
// in the end, announce the winner if there is one
function game(playerSelection) {
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
    console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}`);

    if (playerScore == 5 || computerScore == 5) {
        // figure out the winner and keep track of score
        if (playerScore > computerScore) {
            finalResult_p.innerHTML = "You won!";
            // alert("You won! To replay press Okay")
            // announce here the winner with a pop up and add button to restart the game
        }
        else if (playerScore < computerScore) {
            finalResult_p.innerHTML = "You lost!";
            // alert("You lost! To replay press Okay")

        }
        // reset();
    }
}

// announce winner at the end of the game


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