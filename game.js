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