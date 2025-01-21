// ROCK PAPER SCISSORS

const choices = ["coral", "seaweed", "claw"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  console.log("playing");
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice == computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playerChoice) {
      case "coral":
        result = computerChoice === "seaweed" ? "You win!" : "You lose!";
        break;
      case "seaweed":
        result = computerChoice === "coral" ? "You win!" : "You lose!";
        break;
      case "claw":
        result = computerChoice === "seaweed" ? "You win!" : "You lose!";
        break;
    }
  }
  console.log(result);
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You win!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You lose!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
