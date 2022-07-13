
// let input;
// let player1;
// let playerScore=0;
// let computerScore=0;
let computer;
let result;

// game();

function computerPlay () {
    let num = Math.floor(Math.random()*3)+1;
    if(num == 1)
        return computer = "Rock";
    else if(num == 2)
        return computer = "Paper";
    else 
        return computer = "Scissors"; 
}

function play(playerSelction, computerSelection){
    if(playerSelction == "ROCK" && computerSelection == "Rock"){
        result = "Tie";
        return "They chose Rock, it's a tie!";
    }
    else if(playerSelction == "ROCK" && computerSelection == "Paper"){
        result = "Lose";
        return "Paper beats Rock, You Lose!";
    }
    else if(playerSelction == "ROCK" && computerSelection == "Scissors"){
        result = "Win";
        return "Rock beats Scissors, You Win!";
    }
    else if(playerSelction == "PAPER" && computerSelection == "Paper"){
        result = "Tie";
        return "They chose paper, It's a tie!";
    }
    else if(playerSelction == "PAPER" && computerSelection == "Rock"){
        result = "Win";
        return "Paper beats Rock, You Win!";
    }
    else if(playerSelction == "PAPER" && computerSelection == "Scissors"){
        result = "Lose";
        return "Scissors beats Paper, You Lose!";
    }
    else if(playerSelction == "SCISSORS" && computerSelection == "Paper"){
        result = "Win";
        return "Scissors beats Paper, You Win!";
    }
    else if(playerSelction == "SCISSORS" && computerSelection == "Rock"){
        result = "Lose";
        return "Rock beats Scissors, You Lose!";
    }
    else {
        result = "Tie";
        return "They chose scissors, It's a tie!";
    }
}
// function game()
// {
//     //Runs the game 5 times 
//     // for(let i = 0; i < 5; i++)
//     // {
//         guess();
//         computer = computerPlay();
//         play(player1, computer);
//         if(result == "Lose"){
//             computerScore++;
//         }
//         else if(result == "Win"){
//             playerScore++;
//         }
        

    
//     console.log(computerScore);
//     console.log(playerScore);
//     if(playerScore > computerScore){
//         console.log("You Win! You won "+playerScore+" of the 5 matches");
//         let playAgain=prompt("Do you want to play again y or n?: ")
//         if(playAgain == "y"){
//             computerScore=0;
//             playerScore=0;
//             game();
//         }
       
//     }
//     else if(computerScore > playerScore){
//         console.log("You Lose! The computer won "+computerScore+" of the 5 matches")
//         let playAgain=prompt("Do you want to play again y or n?: ")
//         if(playAgain == "y"){
//             computerScore=0;
//             playerScore=0;
//             game();
//         }
       
//     }
//     else{
//         console.log("It's a tie! You both won "+playerScore+" of the 5 matches")
//         let playAgain=prompt("Do you want to play again y or n?: ")
//         if(playAgain == "y"){
//             computerScore=0;
//             playerScore=0;
//             game();
//         }
        
//     }
    
// }
// }
// function guess(){
//     input = prompt("Enter either rock, paper, or scissors: ");
//     player1 = input.toUpperCase();
//     if(player1 !== "ROCK" && player1 !== "PAPER" && player1 !== "SCISSORS"){
//         console.log("Invalid Input: Only rock, paper, or scissors is accepted")
//         return guess()
//     }
//     else{

//     }
// }