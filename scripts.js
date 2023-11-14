/*
    prompt user for game choice
        1 rock
        2 paper
        3 scissors
    generate computer choice (same options as above)
    compare player choice against computer choice using normal rules
    display winner or loser message
*/

function getComputerChoice() {
  let choice;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
  }
  return choice;
}

function getPlayerChoice() {
  let choice;

  while (choice != "rock" && choice != "paper" && choice != "scissors")
    choice = prompt(
      "Please enter your choice: Rock, Paper, or Scissors"
    ).toLowerCase();

  return choice;
}

function playRound(playerChoice, computerChoice) {
  let result;
  switch (playerChoice.toLowerCase()) {
    case "rock":
      switch (computerChoice) {
        case "Rock":
          result = "It's a tie. Rock vs Rock";
          break;
        case "Paper":
          result = "You lose! Paper beats Rock";
          break;
        case "Scissors":
          result = "You win! Rock beats Scissors";
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "Rock":
          result = "You Win! Paper beats Rock.";
          break;
        case "Paper":
          result = "It's a tie. Paper vs Paper";
          break;
        case "Scissors":
          result = "You lose! Scissors cut Paper";
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "Rock":
          result = "You lose! Rock beats Scissors";
          break;
        case "Paper":
          result = "You win! Scissors cut Paper";
          break;
        case "Scissors":
          result = "It's a tie. Scissors vs Scissors";
          break;
      }
      break;
  }
  return result;
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

console.log(playerChoice);
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));
