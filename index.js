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
    }
};
function getHumanChoice() {
    let answer = prompt("Choose Rock-Paper-Scissors", "");
    return (answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase());
};
function playGame() {
    function playRound() {
        const computer = getComputerChoice();
        const human = getHumanChoice();

        console.log("computer chose = " + computer);
        console.log("human chose = " + human);
        console.log("");

        if (computer == "Rock" && human == "Paper" ||
            computer == "Paper" && human == "Scissors" ||
            computer == "Scissors" && human == "Rock") {

            humanScore += 1;

            console.log("Human Win, Computer Lose");
            console.log("");
            console.log("Human Score = " + humanScore);
            console.log("Computer Score = " + computerScore);
            console.log("");

        } else if (human == "Rock" && computer == "Paper" ||
            human == "Paper" && computer == "Scissors" ||
            human == "Scissors" && computer == "Rock") {

            computerScore += 1;
            console.log("Computer Win, Human Lose");
            console.log("");
            console.log("Human Score = " + humanScore);
            console.log("Computer Score = " + computerScore);
            console.log("");

        } else if (computer == human) {

            console.log("it's DRAW!");
            console.log("");
            console.log("Human Score = " + humanScore);
            console.log("Computer Score = " + computerScore);
            console.log("");
        };
    };

    let humanScore = 0;
    let computerScore = 0;

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

};