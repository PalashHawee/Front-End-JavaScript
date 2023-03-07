'use strict';
// document.querySelector('.guess').value = 77;
// document.querySelector('.message').textContent = 'Palash';
// document.querySelector('.number').textContent = 100;
// document.querySelector('.score').textContent = 33;

// Secret Number
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//Defining varable for High Score
let highscore = 0;

//Refactoring the message quary into a function
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number');
  } else if (guess === SecretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Algo for uopdating high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //WHen guess is wrong
  else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(
        guess > SecretNumber ? 'Number is Too High!' : 'Number is too Low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 'You lost the game!';
    }
  }
  //When guess too high
  // else if (guess > SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Number is Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 'You lost the game!';
  //   }
  // } else if (guess < SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Number is Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Implementing "Again" button for reseting the game
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //resetting the styles as it was before
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
