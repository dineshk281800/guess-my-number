'use strict';

// Element
const guessE1=document.getElementById('guess');

// const numberE1=document.getElementById('number');
const messageE1=document.getElementById('message');
const scoreE1=document.getElementById('score');
const highScoreE1=document.getElementById('high-score');

const btnCheck=document.getElementById('btn-check');
const btnAgain=document.getElementById('btn-again');


// Variable
let score;
let highScore=0;
let secretNumber;
let guess;

// Function
const displayMessage=function(message){
  messageE1.textContent=message;
};

const init=function(){
  score=20;
  secretNumber=Math.trunc(Math.random()*20)+1;
  scoreE1.textContent=score;
  guessE1.value=null;
  displayMessage('🔴Start Guessing...');
  // numberE1.textContent='?';
  // numberE1.style.width='15rem';
  document.querySelector('body').style.backgroundColor='#222';
};

const check=function(){
  guess=Number(guessE1.value);
  if(!guess){
    displayMessage('⛔ No number?');
  }else if(guess === secretNumber){
    displayMessage('✔ Correct Number!');
    // numberE1.textContent=secretNumber;
    // numberE1.style.width='30rem';
    document.querySelector('body').style.backgroundColor='#60b347';
    if(score>highScore){
      highScore=score;
      highScoreE1.textContent=highScore;
    }
  }else if(guess !== secretNumber){
    if(score>1){
      displayMessage(guess>secretNumber? '🔼 Too high!' : '🔽 Too low!');
      score--;
      scoreE1.textContent=score;
      guessE1.value=null;
    }else{
      displayMessage('🔴You lost the game!');
      // numberE1.textContent=secretNumber;
      scoreE1.textContent=0;
      guessE1.value=null;
      document.querySelector('body').style.backgroundColor='#770000';
      // numberE1.style.width='30rem';
    }
  }
};

// Event Listener
btnCheck.addEventListener('click',check);
btnAgain.addEventListener('click',init);
// initial
init();