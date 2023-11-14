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
  choice = choice.charAt(0).toUpperCase() + choice.substring(1);
  return choice;
}

function playRound(playerChoice, computerChoice) {
  let result;
  switch (playerChoice.toLowerCase()) {
    case "rock":
      switch (computerChoice) {
        case "Rock":
          result = "tie";
          break;
        case "Paper":
          result = "lose";
          break;
        case "Scissors":
          result = "win";
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "Rock":
          result = "win";
          break;
        case "Paper":
          result = "tie";
          break;
        case "Scissors":
          result = "lose";
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "Rock":
          result = "lose";
          break;
        case "Paper":
          result = "win";
          break;
        case "Scissors":
          result = "tie";
          break;
      }
      break;
  }
  return result;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 1; i <= 5; i++) {
    console.log(
      "Round " + i + ": score is " + playerScore + "-" + computerScore
    );
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log("You chose " + playerChoice);
    console.log("The computer chose " + computerChoice);

    let result = playRound(playerChoice, computerChoice);
    if (result == "win") {
      playerScore++;
      console.log("You won! " + playerChoice + " beats " + computerChoice);
    } else if (result == "tie") {
      console.log("It's a tie. " + playerChoice + " vs " + computerChoice);
    } else if (result == "lose") {
      computerScore++;
      console.log("You lost! " + computerChoice + " beats " + playerChoice);
    }
  }
}

game();
