function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();
    computerSelection = String(computerSelection).toLowerCase();

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "Tie!";
                case "paper":
                    return "You Lose! Paper beats Rock";
                case "scissors":
                    return "You Win! Rock beats Scissors";
                default:
                    return "Invalid choice for player!";
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You Win! Paper beats Rock";
                case "paper":
                    return "Tie!";
                case "scissors":
                    return "You Lose! Scissors beats Paper";
                default:
                    return "Invalid choice for player!";
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You Lose! Rock beats Scissors";
                case "paper":
                    return "You Win! Scissors beats Paper";
                case "scissors":
                    return "Tie!";
                default:
                    return "Invalid choice for player!";
            }
        default:
            return "Invalid choice for player!";
    }
}

function game() {
    let playerScore = 0;
    let computerscore = 0;

    for (i = 0; i < 5; i++) {
        const roundResult = playRound(prompt("Enter your choice out of rock, paper, or scissors:"), getComputerChoice());

        console.log(roundResult);

        if (roundResult.includes("Win")) {
            playerScore++;
            console.log(`Your score is now ${playerScore} and computer score is still ${computerscore}.`);
        } else if (roundResult.includes("Lose")) {
            computerscore++;
            console.log(`Your score is still ${playerScore} and computer score is now ${computerscore}.`);
        } else {
            console.log(`Your score is still ${playerScore} and computer score is still ${computerscore}.`);
        }

    }

    if (playerScore > computerscore) {
        console.log("You have won the best of 5!");
    } else if (playerScore < computerscore) {
        console.log("You have lost the best of 5...");
    } else {
        console.log("It's a tie in best of 5!");
    }
}

game();