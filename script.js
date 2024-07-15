//To evaluate computer choice.
function getComputerChoice() {
  let choice = Math.random() * 3;

  if (parseInt(choice) == 0) {
    computerSelection = "Rock";
    return "rock";
  } else if (parseInt(choice) == 1) {
    computerSelection = "Paper";
    return "paper";
  } else {
    computerSelection = "Scissors";
    return "scissors";
  }
}

//Score Variables declarations.
let computerScore = 0;
let playerScore = 0;
//Competitors Selections.
let computerSelection;
let playerSelection;
//Selector for document body.
const body = document.querySelector("body");
//Result DIV for each round.
let result = document.createElement("div");
//Score DIV
let score = document.createElement("div");
//Apply flag to determine the winner.
//Computer -> 1 | Player -> 2 | Draw -> 0
let roundResult = 0;

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
    roundResult = 0;
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
    roundResult = 1;
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
    roundResult = 2;
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

//Play some rounds and determine the winner.
function playGame() {
  //Buttons Selector.
  const buttons = document.querySelectorAll("button");
  //Apply event listener to the buttons.
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      //play round when pressing button.
      playSingleRound(button.id, getComputerChoice());
      //let the result appear on screen
      if (roundResult === 0) {
        result.textContent =
          "Computer: " +
          computerSelection +
          " " +
          computerScore +
          " | Player: " +
          button.textContent +
          " " +
          playerScore +
          " => Result: Draw.";
      } else if (roundResult === 1) {
        result.textContent =
          "Computer: " +
          computerSelection +
          " " +
          computerScore +
          " | Player: " +
          button.textContent +
          " " +
          playerScore +
          " => Result: Computer wins.";
      } else {
        result.textContent =
          "Computer: " +
          computerSelection +
          " " +
          computerScore +
          " | Player: " +
          button.textContent +
          " " +
          playerScore +
          " => Result: Player wins.";
      }
      body.appendChild(result);

      if (playerScore >= 5 && computerScore < 5) {
        score.textContent = "FINITO => PLAYERITO WON!";
      } else if (playerScore < 5 && computerScore >= 5) {
        score.textContent = "FINITO => COMPUTERITO WON!";
      }
      body.appendChild(score);
    });
  });
}

playGame();
