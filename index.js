function playGame() {
    function getComputerChoice() {
        //get math random (result 0-8)
        let math = Math.floor(Math.random() * 10) - 1;

        //if math equals 0,1,2 then result equals rock
        //else if math equals 3,4,5 then result equals paper
        //else if math equals 6,7,8 then result equals scissors
        if (math <= 2) {
            return ("Rock");
        } else if (math >= 3 && math <= 5) {
            return ("Paper");
        } else if (math >= 6) {
            return ("Scissors");
        }
    }

    function getHumanChoice() {
        let userInput = prompt("Rock-Paper-Scissors?", "");
        let result = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
        return (result);
    }
    //get variable computerChoice and humanChoice
    //if Rock vs Paper equals PAPER WINS
    //else if Rock vs Scissors equals ROCK WINS 
    //else if Paper vs Scissors equals SCISSORS WINS
    //else equals draw
    let playRound = function (computerSelection, humanSelection) {
        let wins;
        if ((computerSelection === "Rock" || humanSelection === "Rock") && (computerSelection === "Paper" || humanSelection === "Paper")) {
            wins = "Paper"
        } else if ((computerSelection === "Rock" || humanSelection === "Rock") && (computerSelection === "Scissors" || humanSelection === "Scissors")) {
            wins = "Rock"
        } else if ((computerSelection === "Paper" || humanSelection === "Paper") && (computerSelection === "Paper" || humanSelection === "Paper")) {
            wins = "Scissors"
        } else {
            wins = "draw";
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

    for (let i = 0; i < 5; i++) {
        console.log("ATTEMPS = " + (i + 1));
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        console.log('');
        playRound(computerSelection, humanSelection);
        console.log('');
        console.log("⋆｡‧˚ʚ ୨ৎ ɞ˚‧｡⋆⋆｡‧˚ʚ ୨ৎ ɞ˚‧｡⋆⋆｡‧˚ʚ ୨ৎ ɞ˚‧｡⋆")
    }

    if (computerScore > humanScore) {
        //computer wins
        console.log("YOU LOSE! COMPUTER WINS!");
    } else if (computerScore < humanScore) {
        //human wins
        console.log("CONGRATULATION,YOU WIN! COMPUTER LOSE!");
    } else {
        //draw
        console.log("NO ONE WIN! IT'S DRAW!");
    }

    console.log("");
    console.log("COMPUTER HIGHSCORE = " + computerScore);
    console.log("HUMAN HIGHSCORE = " + humanScore);
}