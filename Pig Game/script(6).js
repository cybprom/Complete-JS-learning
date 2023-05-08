'use strict';

// Selecting Elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const playerScore0 = document.querySelector('#playerscore--0');
const playerScore1 = document.getElementById('playerscore--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

const overlay = document.querySelector('.overlay');
const rules = document.querySelector('.rules');
const showRuleBtn = document.querySelector('.showrule-btn');

let scores, currentScore, activePlayer, playing;

//  Remove Modal Game Rule

const closeRules = function () {
    rules.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Show Rules Btn

showRuleBtn.addEventListener('click', () => {
    rules.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// Handle 'ESC' Key

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !rules.classList.contains('hidden')) {
        rules.classList.add('hidden');
        overlay.classList.add('hidden');
    }
});


// Starting conditions

const init = function () {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    playerScore0.textContent = 0;
    playerScore1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    diceEl.classList.add('hidden');
}
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;   
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

// Rolling dice func.
btnRoll.addEventListener('click', () => {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.floor(Math.random() * 6 + 1);
        console.log(dice);

        // 2. Display dice based on random number
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // currentScore0.textContent = currentScore;  // CHANGE LATER
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// HOLD BTN: Holding Current Score

btnHold.addEventListener('click', () => {
    if (playing) {
        // 1. Add current score to player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`playerscore--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            
        } else {
            // Switch the next player
            switchPlayer();
        }
    }
});

// Resetting the Game
btnNew.addEventListener('click', init);