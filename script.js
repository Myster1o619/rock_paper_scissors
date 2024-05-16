const totalRounds = 5;
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let playerScore = 0;
let pcScore = 0;
let playerChoice = "";
let pcChoice = "";

const initGame = () => {
    pcChoice = generateComputerChoice();
    console.log(`PC choice: ${pcChoice}`);
    playerChoice = getPlayerChoice();
    console.log(`Player choice: ${playerChoice}`);
    compareChoices(pcChoice, playerChoice);
}

const generateComputerChoice = () => {
    //  Returns a random integer from 0 to 2:
    const chosenNumber = Math.floor(Math.random() * 3);
    // Assign number to an element for the pc:
    return assignComputerChoice(chosenNumber);
}

// Take number between 0 - 2 (randomNum) and assign choice variable a value: rock/paper/scissors
const assignComputerChoice = (randomNum = 0) => {
    let choice = "";

    switch (randomNum) {
        case 0:
            choice = ROCK;
            break;

        case 1:
            choice = PAPER;
            break;

        case 2:
            choice = SCISSORS;
            break;
    }
    return choice;
}

//Get the players choice
const getPlayerChoice = () => {
    choice = prompt("What do you choose? Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

// Check computer choice versus player choice and determine if there is a winner or a draw
const compareChoices = (compChoice, humanChoice) => {
    if (compChoice === humanChoice) {
        console.warn(`TIE!`);
        return;
    }

    if (humanChoice === ROCK) {
        if (compChoice === PAPER) {
            console.warn(`${compChoice} beats ${humanChoice}`);
            pcScore += 1;
            console.log(pcScore);
        }

        if (compChoice === SCISSORS) {
            console.warn(`${humanChoice} beats ${compChoice}`);
            playerScore += 1;
            console.log(playerScore);
        }

    }

    if (humanChoice === PAPER) {
        if (compChoice === SCISSORS) {
            console.warn(`${compChoice} beats ${humanChoice}`);
            pcScore += 1;
            console.log(pcScore);
        }

        if (compChoice === ROCK) {
            console.warn(`${humanChoice} beats ${compChoice}`);
            playerScore += 1;
            console.log(playerScore);
        }

    }

    if (humanChoice === SCISSORS) {
        if (compChoice === ROCK) {
            console.warn(`${compChoice} beats ${humanChoice}`);
            pcScore += 1;
            console.log(pcScore);
        }

        if (compChoice === PAPER) {
            console.warn(`${humanChoice} beats ${compChoice}`);
            playerScore += 1;
            console.log(playerScore);
        }

    }
}
