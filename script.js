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
