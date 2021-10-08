'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //where there not input or empty number
  if (!guess || typeof guess !== 'number') {
    displayMessge('⛔ Not a Number');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      secretNumber > guess
        ? displayMessge('👇 Lowse Number')
        : displayMessge('👆 Highst Number');
      score--;
      scoreCount(score);
    } else {
      displayMessge('👿 Lost Your Number');
      scoreCount(0);
    }
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    scoreCount(score);
    displayMessge('👉 Correct Number, 🏆 You are win!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

const displayMessge = msg => {
  document.querySelector('.message').textContent = msg;
};

const scoreCount = val => {
  document.querySelector('.score').textContent = val;
};

document.querySelector('.again').addEventListener('click', function () {
  displayMessge('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreCount(score);
});
