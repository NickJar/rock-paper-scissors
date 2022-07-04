
let input = prompt("Pick Rock, Paper, Or Scissors: ");
let player1= input.charAt(0).toUpperCase() + input.slice(1);
let computer = computerPlay();
play(player1, computer);

function computerPlay () {
    let num = Math.floor(Math.random()*3)+1;
    if(num == 1)
        return "Rock";
    else if(num == 2)
        return "Paper";
    else 
        return "Scissors"; 
}
function startup(){
    
}
function play(playerSelction, computerSelection){
    if(player1 == "Rock" && computer == "Rock"){
        return alert("They chose Rock, it's a tie!")
    }
    else if(player1 == "Rock" && computer == "Paper"){
        return alert("They chose paper, You Lose!")
    }
    else if(player1 == "Rock" && computer == "Scissors"){
        return alert("They chose scissors, You Win!")
    }
    else if(player1 == "Paper" && computer == "Paper"){
        return alert("They chose paper, It's a tie!")
    }
    else if(player1 == "Paper" && computer == "Rock"){
        return alert("They chose Rock, You Win!")
    }
    else if(player1 == "Paper" && computer == "Scissors"){
        return alert("They chose scissors, You Lose!")
    }
    else if(player1 == "Scissors" && computer == "Paper"){
        return alert("They chose paper, You Win!")
    }
    else if(player1 == "Scissors" && computer == "Rock"){
        return alert("They chose Rock, You Lose!")
    }
    else {
        return alert("They chose scissors, It's a tie!")
    }


}
