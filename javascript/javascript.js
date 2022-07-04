
let input;
let player1;
let computer;
let result;
let playerScore=0;
let computerScore=0;
game();

function computerPlay () {
    let num = Math.floor(Math.random()*3)+1;
    if(num == 1)
        return computer = "Rock";
    else if(num == 2)
        return computer = "Paper";
    else 
        return computer = "Scissors"; 
}
function startup(){
    
}
function play(playerSelction, computerSelection){
    console.log(player1)
    if(player1 == "ROCK" && computer == "Rock"){
        result = "Tie";
        return console.log("They chose Rock, it's a tie!")
    }
    else if(player1 == "ROCK" && computer == "Paper"){
        result = "Lose";
        return console.log("They chose paper, You Lose!")
    }
    else if(player1 == "ROCK" && computer == "Scissors"){
        result = "Win";
        return console.log("They chose scissors, You Win!")
    }
    else if(player1 == "PAPER" && computer == "Paper"){
        result = "Tie";
        return console.log("They chose paper, It's a tie!")
    }
    else if(player1 == "PAPER" && computer == "Rock"){
        result = "Win";
        return console.log("They chose Rock, You Win!")
    }
    else if(player1 == "PAPER" && computer == "Scissors"){
        result = "Lose";
        return console.log("They chose scissors, You Lose!")
    }
    else if(player1 == "SCISSORS" && computer == "Paper"){
        result = "Win";
        return console.log("They chose paper, You Win!")
    }
    else if(player1 == "SCISSORS" && computer == "Rock"){
        result = "Lose";
        return console.log("They chose Rock, You Lose!")
    }
    else {
        result = "Tie";
        return console.log("They chose scissors, It's a tie!")
    }
}
function game()
{
   
    for(let i = 0; i < 5; i++)
    {
        guess();
        computer = computerPlay();
        play(player1, computer);
        if(result == "Lose"){
            computerScore++;
        }
        else if(result == "Win"){
            playerScore++;
        }
        

    }
    console.log(computerScore);
    console.log(playerScore);
    if(playerScore > computerScore){
        console.log("You Win! You won "+playerScore+" of the 5 matches");
        let playAgain=prompt("Do you want to play again y or n?: ")
        if(playAgain == "y"){
            computerScore=0;
            playerScore=0;
            return game();
        }
        else{
            return
        }
    }
    else if(computerScore > playerScore){
        console.log("You Lose! The computer won "+computerScore+" of the 5 matches")
        let playAgain=prompt("Do you want to play again y or n?: ")
        if(playAgain == "y"){
            computerScore=0;
            playerScore=0;
            return game();
        }
        else{
            return
        }
    }
    else{
        console.log("It's a tie! You both won "+playerScore+" of the 5 matches")
        let playAgain=prompt("Do you want to play again y or n?: ")
        if(playAgain == "y"){
            computerScore=0;
            playerScore=0;
            return game();
        }
        else{
            return
        }
    }
    

}
function guess(){
    input = prompt("Enter either rock, paper, or scissors: ");
    player1 = input.toUpperCase();
    if(player1 !== "ROCK" && player1 !== "PAPER" && player1 !== "SCISSORS"){
        console.log("Invalid Input: Only rock, paper, or scissors is accepted")
        return guess()
    }
    else{

    }
}