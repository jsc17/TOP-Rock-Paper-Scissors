/*
    prompt user for game choice
        1 rock
        2 paper
        3 scissors
    generate computer choice (same options as above)
    compare player choice against computer choice using normal rules
    display winner or loser message
*/

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#comp-score");
const display = document.querySelector("#display");

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  let result = "null";
  if (playerChoice === computerChoice) {
    result = "tie.";
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Rock")
  ) {
    result = "win!";
    playerScore.innerText = parseInt(playerScore.innerText) + 1;
  } else {
    result = "lose!";
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  }
  display.innerText =
    "You chose " +
    playerChoice +
    " and the computer chose " +
    computerChoice +
    ". You " +
    result;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playRound(e.target.innerText, getComputerChoice());
  });
});
