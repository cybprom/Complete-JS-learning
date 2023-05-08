'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/

// Handling event 

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    // COME BACK AND CHECK

    // When there's no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');
        // document.querySelector('.message').style.color = 'red';

        // When players win
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '20rem';

        // Choosing HighScore
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // WHEN THE GUESS IS WRONG
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '🚩 You lost the game!, Play again';
            displayMessage('🚩 You lost the game, Play again!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.guess').style.borderColor = 'red';
        }
    }

        // WHEN GUESS IS TOO HIGH
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🚩 You lost the game!, Play again';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.guess').disabled = true;
    //         document.querySelector('.guess').style.borderColor = 'red';
    //     }

    //     // WHEN GUESS IS TOO LOW
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🚩 You lost the game!, Play again';
    //         document.querySelector('.score').textContent = 0; 
    //         document.querySelector('.guess').disabled = true;
    //         document.querySelector('.guess').style.borderColor = 'red';
    //     }
    // }
})


document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.ceil(Math.random() * 20);
    
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.guess').style.borderColor = 'white';
});


