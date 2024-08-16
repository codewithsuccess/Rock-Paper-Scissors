const image = document.querySelectorAll("img");
const inst = document.querySelector("#instruction");
let uScore = document.querySelector(".u-score");
let cScore = document.querySelector(".c-score");

let userScore = 0;
let compScore = 0;

let compChoice;
let userChoice;

image.forEach((img) => {
    img.addEventListener("click", () => {
        userChoice = img.getAttribute('id');

        genCompChoice();
        drawGame();
        winnerCheck();
    });
});

const genCompChoice = () => {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    compChoice = choice[random];
};

const winnerCheck = () => {
    // rock & paper : paper win
    // rock & scissors : rock
    // paper & scissors : scissors

    if (userChoice == "rock" && compChoice == "paper") {
        // inst.innerText = "You Lose.";
        inst.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        inst.style.backgroundColor = "red";

        compScore++;

    } else if (userChoice == "rock" && compChoice == "scissors") {
        inst.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        inst.style.backgroundColor = "green";

        userScore++;

    } else if (userChoice == "paper" && compChoice == "scissors") {
        inst.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        inst.style.backgroundColor = "red";

        compScore++;

    } else if (userChoice == "paper" && compChoice == "rock") {
        inst.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        inst.style.backgroundColor = "green";

        userScore++;

    } else if (userChoice == "scissors" && compChoice == "rock") {
        inst.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        inst.style.backgroundColor = "red";

        compScore++;

    } else if (userChoice == "scissors" && compChoice == "paper") {
        inst.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        inst.style.backgroundColor = "green";
        
        userScore++;
    }
    
    // Updating Score
    uScore.innerText = userScore;
    cScore.innerText = compScore;
};

const drawGame = () => {
    // Draw Game
    if (userChoice == compChoice) {
        inst.innerText = `Game Draw. You and Computer pick out ${userChoice}`;
        inst.style.backgroundColor = "#7facff";
    }
};