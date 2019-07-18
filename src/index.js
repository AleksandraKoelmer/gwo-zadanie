import generateBoard from './generateGameBoard'
import * as handle from './handleGame'

const startButton = document.getElementById('startGame');
startButton.onclick = newGame;

const resetButton = document.getElementById('resetGame');
resetButton.onclick = newGame;

export var state = {};

function newGame() {
    state = {
        time: 60,
        score: 0,
        lives: 5,
        fields: []
    };
    generateBoard()
    handle.round();
};