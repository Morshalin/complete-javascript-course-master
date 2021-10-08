'use strict';

let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let courntScore0El = document.getElementById('current--0');
let courntScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const imgDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0,
  activePlayer = 0,
  socre = [0, 0],
  playing;

const init = () => {
  activePlayer = 0;
  socre = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  courntScore0El.textContent = 0;
  courntScore1El.textContent = 0;
  playing = true;
  imgDice.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

btnNew.addEventListener('click', init);

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  imgDice.classList.remove('hidden');
  imgDice.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', () => {
  if (currentScore <= 0) {
    alert(
      'Are You play game? If you are play game, please click the ROLL DICE button and enjoy it.'
    );
  }
  if (playing) {
    socre[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      socre[activePlayer];
    if (socre[activePlayer] >= 100) {
      playing = false;
      imgDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
