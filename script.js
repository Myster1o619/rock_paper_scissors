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
    playerChoice = getPlayerChoice();
}

const generateComputerChoice = () => {
    //  Returns a random integer from 0 to 2:
    const chosenNumber = Math.floor(Math.random() * 3);
    // Assign number to an element for the pc:
    pcChoice = assignComputerChoice(chosenNumber);
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
