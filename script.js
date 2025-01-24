// ROCK PAPER SCISSORS

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "coral";
  if (randomNumber === 1) return "seaweed";
  return "claw";
}

function playGame(playerChoice) {
  console.log("playing");
  const computerChoice = getComputerChoice();
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    if (
      (playerChoice === "coral" && computerChoice === "seaweed") ||
      (playerChoice === "seaweed" && computerChoice === "claw") ||
      (playerChoice === "claw" && computerChoice === "coral")
    ) {
      result = "You win!";
    } else {
      result = "You lose!";
    }
  }

  console.log(result);
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  if (result === "You win!") {
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "You lose!") {
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
}
