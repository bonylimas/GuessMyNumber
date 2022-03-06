'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();

  // Change the background color to black and width to 15
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  if (score <= 0) {
    return;
  }

  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
    // When player wins
  } else if (guess === secretNumber) {
    // Get high score
    highScore = score > highScore ? score : highScore;

    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // Change the background color and width of the number box
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too low or too high
  } else {
    document.querySelector('.message').textContent =
      guess < secretNumber ? '📉 Too low!' : '📈 Too high!';

    score--;
  }

  if (score === 0) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
  }

  document.querySelector('.score').textContent = score;

  document.querySelector('.highscore').textContent = highScore;

  document.querySelector('.guess').focus();
});
