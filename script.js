//To evaluate computer choice.
function getComputerChoice() {
  let choice = Math.random() * 3;

  if (parseInt(choice) == 0) {
    return "rock";
  } else if (parseInt(choice) == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Variables declarations.
let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose: rock, paper or scissors.");
let computerScore = 0;
let playerScore = 0;

//To play single round and get the winner for the round.
function playSingleRound(playerSelection, computerSelection) {
  if (
    //Draw cases.
    (computerSelection === "rock" &&
      playerSelection.toLowerCase() === "rock") ||
    (computerSelection === "paper" &&
      playerSelection.toLowerCase() === "paper") ||
    (computerSelection === "scissors" &&
      playerSelection.toLowerCase() === "scissors")
  ) {
    console.log(
      "Computer: " +
        computerSelection +
        " | Player: " +
        playerSelection +
        " => Result: Draw."
    );
  } else if (
    //Computer winning cases.
    (computerSelection === "rock" &&
      playerSelection.toLowerCase() === "scissors") ||
    (computerSelection === "paper" &&
      playerSelection.toLowerCase() === "rock") ||
    (computerSelection === "scissors" &&
      playerSelection.toLowerCase() === "paper")
  ) {
    console.log(
      "Computer: " +
        computerSelection +
        " | Player: " +
        playerSelection +
        " => Result: Computer wins."
    );

    computerScore++;
  } else {
    //Player winning case.
    console.log(
      "Computer: " +
        computerSelection +
        " | Player: " +
        playerSelection +
        " => Result: Player wins."
    );

    playerScore++;
  }
}

playSingleRound(playerSelection, computerSelection);
