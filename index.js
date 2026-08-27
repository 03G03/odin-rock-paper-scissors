console.log("Hello World!")

function getComputerChoice() {
    //get math random (result 0-8)
    let math = Math.floor(Math.random() * 10) - 1;

    //if math equals 0,1,2 then result equals rock
    //else if math equals 3,4,5 then result equals paper
    //else if math equals 6,7,8 then result equals scissors
    if (math <= 2) {
        console.log("computer choice is ROCK");
        return ("Rock");
    } else if (math >= 3 && math <= 5) {
        console.log("computer choice is PAPER");
        return ("Paper");
    } else if (math >= 6) {
        console.log("computer choice is SCISSORS");
        return ("Scissors");
    }
}

function getHumanChoice() {
    let userInput = prompt("Rock-Paper-Scissors?", "");
    let result = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    console.log("human choice is " + result);
    return (result);
}

function playGame() {
    //get variable computerChoice and humanChoice
    //if Rock vs Paper equals PAPER WINS
    //else if Rock vs Scissors equals ROCK WINS 
    //else if Paper vs Scissors equals SCISSORS WINS
    //else equals draw
    let playRound = function (computerSelection, humanSelection) {
        let wins;
        if ((computerSelection === "Rock" || humanSelection === "Rock") && (computerSelection === "Paper" || humanSelection === "Paper")) {
            wins = "Paper"
            console.log("playRound is running PAPER");
        } else if ((computerSelection === "Rock" || humanSelection === "Rock") && (computerSelection === "Scissors" || humanSelection === "Scissors")) {
            wins = "Rock"
            console.log("playRound is running ROCK");
        } else if ((computerSelection === "Paper" || humanSelection === "Paper") && (computerSelection === "Paper" || humanSelection === "Paper")) {
            wins = "Scissors"
            console.log("playRound is running SCISSORS");
        } else {
            wins = "draw";
            console.log("playRound is running DRAW");
        }

        console.log("Computer choose = " + computerSelection);
        console.log("You choose = " + humanSelection);

        if (computerSelection === wins) {
            computerScore += 1;
            console.log("YOU LOSE! " + computerSelection + " beats " + humanSelection);
            console.log("Computer Score = " + computerScore);
            console.log("Human Score = " + humanScore);
        } else if (humanSelection === wins) {
            humanScore += 1;
            console.log("YOU WIN! " + humanSelection + " beats " + computerSelection);
            console.log("Computer Score = " + computerScore);
            console.log("Human Score = " + humanScore);
        } else {
            console.log("Its DRAW! " + computerSelection + " equals " + humanSelection);
            console.log("Computer Score = " + computerScore);
            console.log("Human Score = " + humanScore);
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    console.log('');
    playRound(computerSelection, humanSelection);

    console.log("it's running the first");

    console.log('---------------------------');
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log('');
    playRound(computerSelection, humanSelection);

    console.log('');
    console.log("it's running the second");

    console.log('---------------------------');
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log('');
    playRound(computerSelection, humanSelection);

    console.log('');
    console.log("it's running the third");

    console.log('---------------------------');
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log('');
    playRound(computerSelection, humanSelection);

    console.log('');
    console.log("it's running the third");

    console.log('---------------------------');
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log('');
    playRound(computerSelection, humanSelection);

    console.log('');
    console.log("it's running the forth");

    console.log('---------------------------');
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log('');
    playRound(computerSelection, humanSelection);

    console.log('');
    console.log("it's running the fifth");

    console.log('---------------------------');
}

playGame();