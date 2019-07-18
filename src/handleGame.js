import { state } from './index'

export function round() {
    const min = Math.ceil(0);
    const max = Math.floor(state.size * state.size);

    setInterval(highlight, 3000);
    function highlight() {
        if (state.time > 0 && state.lives > 0) {
            const drawnField = Math.floor(Math.random() * (max - min)) + min;
            const drawnedField = state.fields[drawnField];
            drawnedField.highlightAndUnderstate;
        };
    };
};

export function userClick(e) {
    if (e.target.classList.contains('active')) {
        let field = document.getElementsByClassName('active');
        field[0].classList.remove('active');
        state.score += 1;
        updateScore(state.score);
    }
    else {
        loseLife();
    }
};

export function timeCounter() {
    const timer = document.getElementById('timer');
    const secondsCounter = setInterval(countdown, 1000);
    function countdown() {
        if (state.time > 0) {
            state.time = state.time - 1;
            timer.innerHTML = 'Czas:' + state.time + 'sek';
        }
        else {
            clearInterval(secondsCounter);
            endGame();
        };
    };
};

export function updateScore(score) {
    scoreResult.innerHTML = 'Punkty: ' + score;
};

export function updateLives(lives) {
    livesResult.innerHTML = 'Życia:' + lives;
};

export function loseLife() {
    if (state.lives > 1) {
        state.lives -= 1;
        updateLives(state.lives)
        alert('Straciłeś życie!')
    }
    else {
        state.lives = 0;
        state.time = 0;
        updateLives(state.lives)
    }
};

export function endGame() {
    alert('Koniec gry! Twój wynik to: ' + state.score)
};