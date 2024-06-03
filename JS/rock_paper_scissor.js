let player  = Math.floor(Math.random() * 3);
let picked;
let computer = Math.floor(Math.random() * 3);
let botPicked;

let result;

if (player == 0) {
    picked = "Rock";
    if (computer == 0) {
        result = "Tie";
    }else if  (computer == 1){
        result = "Player Win";
    }else if (computer == 2){
        result = "Player Lose";
    }
}else if  (player == 1){
    picked = "Scissor";
    if (computer == 0) {
        result = "Player Lose";
    }else if  (computer == 1){
        result = "Tie";
    }else if (computer == 2){
        result = "Player Win";
    }
}else if (player == 2){
    picked = "Paper";
    if (computer == 0) {
        result = "Player Win";
    }else if  (computer == 1){
        result = "Player Lose";
    }else if (computer == 2){
        result = "Tie"
    }
}

if (computer == 0) {
    botPicked = "Rock";
}else if  (computer == 1){
    botPicked = "Scissor";
}else if (computer == 2){
    botPicked = "Paper";
}

console.log("Player picked " + picked);
console.log("Computer picked " + botPicked);
console.log(result);