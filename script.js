const totalRounds = 5;
let playerScore = 0;
let pcScore = 0;
let playerChoice = "";
let pcChoice = "";

const initGame = () => {
    pcChoice = generateComputerChoice();    
}

const generateComputerChoice = () => {
    //  Returns a random integer from 0 to 2:
    const chosenNumber = Math.floor(Math.random() * 3);
    // Assign number to an element for the pc:
    assignComputerChoice(chosenNumber);
}
