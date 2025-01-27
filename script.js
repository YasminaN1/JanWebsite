let userName = prompt("What is your name?");
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
let myTitle = `
 Click your choice below to start, ${userName}!
`;

console.log(myTitle);

document.getElementById("greeting").innerHTML = myTitle;

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "coral";
  if (randomNumber === 1) return "seaweed";
  return "claw";
}

function playGame(playerChoice) {
  if (roundsPlayed >= 5) {
    alert(
      `Game over! Final score - Player: ${playerScore}, Computer: ${computerScore}`
    );
    return;
  }

  const computerChoice = getComputerChoice();
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "coral" && computerChoice === "seaweed") ||
    (playerChoice === "seaweed" && computerChoice === "claw") ||
    (playerChoice === "claw" && computerChoice === "coral")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  roundsPlayed++;

  // Update displays
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  // Check if the game is over
  if (roundsPlayed === 5) {
    const finalMessage =
      playerScore > computerScore
        ? "Congratulations! You won the game!"
        : playerScore < computerScore
        ? "Better luck next time. Computer won!"
        : "It's a tie!";
    alert(
      `${finalMessage}\nFinal score - Player: ${playerScore}, Computer: ${computerScore}`
    );
  }
}
