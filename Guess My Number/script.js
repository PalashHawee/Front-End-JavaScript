'use strict';
// document.querySelector('.guess').value = 77;
// document.querySelector('.message').textContent = 'Palash';
// document.querySelector('.number').textContent = 100;
// document.querySelector('.score').textContent = 33;

// Secret Number
const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'No Number!')
    );
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 'You lost the game!';
    }
  } else if (guess < SecretNumber) {
    document.querySelector('.message').textContent = 'Number is Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
