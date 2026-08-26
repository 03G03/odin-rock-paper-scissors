console.log("Hello World!")

function getComputerChoice() {
    //get math random (result 0-8)
    let math = Math.floor(Math.random() * 10) - 1;

    //if math equals 0,1,2 then result equals rock
    //else if math equals 3,4,5 then result equals paper
    //else if math equals 6,7,8 then result equals scissors
    if (math <= 2) {
        return("Rock");
    } else if (math >= 3 && math <= 5) {
        return("Paper");
    } else if (math >= 6) {
        return("Scissors");
    }
}

//show result
console.log(getComputerChoice())

function getHumanChoice(){
//create variable input
//create prompt, get user input (rock-paper-scissors)
//store input in variable input
let userInput = prompt("Rock-Paper-Scissors?", "");

//return first letter uppercase input
return(userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase())
}

//show input
console.log(getHumanChoice());
