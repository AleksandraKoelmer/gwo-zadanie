import * as generate from './generateGameBoard'
import * as handle from './handleGame'

const start = document.getElementById('startGame');
start.onclick = newGame;

const reset = document.getElementById('resetGame');
reset.onclick = newGame;

export var state = {
    time: 0,
    score: 0,
    lives: 0
};

function newGame() {
    generate.clearTable();
    state = {
        time: 60,
        score: 0,
        lives: 5
    };
    generate.generateBoard()
    handle.round();
};