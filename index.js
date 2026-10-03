function getComputerChoice() {
    let math = Math.floor(Math.random() * 3);
    switch (math) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    };
};
// function getHumanChoice() {
//     let answer = prompt("Choose Rock-Paper-Scissors", "");
//     return (answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase());
// };
function playRound(human) {
    computer = getComputerChoice();
    let notif;

    if (computer == "Rock" && human == "Paper" ||
        computer == "Paper" && human == "Scissors" ||
        computer == "Scissors" && human == "Rock") {

        humanScore += 1;
        notif = "Human Win, Computer Lose";

    } else if (human == "Rock" && computer == "Paper" ||
        human == "Paper" && computer == "Scissors" ||
        human == "Scissors" && computer == "Rock") {

        computerScore += 1;
        notif = "Computer Win, Human Lose";

    } else if (computer == human) {
        notif = "it's DRAW!";
    };

    result = 
    `Computer Chose = ${computer}
    Human Chose = ${human}
    \n${notif}
    \nComputer Score = ${computerScore}
    Human Score = ${humanScore}`;
};

let humanScore = 0;
let computerScore = 0;
let computer;
let result;

const selection = document.querySelector(".playerSelection");
const divResult = document.querySelector(".result");
const para = document.createElement("p");
const paraResult = document.createElement("p");
para.setAttribute('style', 'white-space: pre-line;');

selection.addEventListener("click", (event) => {
    paraResult.textContent = "";
    divResult.appendChild(paraResult);

    let target = event.target;
    switch (target.id) {
        case 'rock':
            playRound("Rock");
            break;
        case 'paper':
            playRound("Paper");
            break;
        case 'scissors':
            playRound("Scissors");
            break;
    };
    para.textContent = result;
    divResult.appendChild(para);

    if (humanScore == 5 && humanScore > computerScore) {
        paraResult.textContent = "Congratulation! Human Win, Computer Lose!";
    } else if (computerScore == 5 && computerScore > humanScore) {
        paraResult.textContent = "Too Bad! Computer Win, You Lose!";
    };
});