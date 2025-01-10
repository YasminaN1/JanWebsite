// ROCK PAPER SCISSORS

const choices = { "coral", "seaweed", "claw"};
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else {
        switch (playerChoice) {
            case "coral":
              result =  (computerChoice === "seaweed") ? "You win!" : "You lose!"
              break;
              case "seaweed":
              result =  (computerChoice === "coral") ? "You win!" : "You lose!"
              break;
              case "claw":
                result =  (computerChoice === "seaweed") ? "You win!" : "You lose!"
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent = result;
// 15:08
resultDisplay.classList.remove("greenText, redText");

    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            break;
            case "You lose!":
                resultDisplay.classList.add("redText");
                break;
    }
}