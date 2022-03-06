'use strict';

let secretNumber= Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

const displayMessage = function(message){
    document.querySelector(".message").textContent=message;
}

document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value);

    //No guess
    if(!guess){
        displayMessage("🚫 No number!")
    }//The guess is righ
    else if(guess===secretNumber){
        displayMessage("🥳 Correct number")
        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";

        //Highscore
        if(score>highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }

        //The guess doesnt equal to the secret number
    }else if(guess !== secretNumber){
        if(score>1)
        {   displayMessage(guess>secretNumber?"📈 Too high!":"📉 Too low");
        score--;
        document.querySelector(".score").textContent=score;}

        //Game is lost score below 1
    else{
        displayMessage("😭 You lost the game!");
        document.querySelector(".score").textContent=0;
    }

    }
});

//Again button
document.querySelector(".again").addEventListener("click",function(){

    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
    score=20;
    document.querySelector(".score").textContent=score;
    secretNumber=Math.trunc(Math.random()*20)+1;
    displayMessage("Start guessing ...")
    document.querySelector(".guess").value="";
    document.querySelector(".number").textContent="?";

})

