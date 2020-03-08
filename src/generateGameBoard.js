import * as handle from './handleGame';
import { state } from './index';
import { Field } from './field'

export default function generateBoard() {
    clearTable();
    createStatePanel();
    createFields(selectSize());
};

function clearTable() {
    const gameBoard = document.getElementById('board');
    if (gameBoard) {
        const maxNumberOfIntervals = 9999;
        for (var i = 1; i < maxNumberOfIntervals; i++) {
            window.clearInterval(i);
        }
        gameBoard.remove();
    }
};

function createStatePanel() {
    const board = document.createElement('div');
    board.id = 'board';

    const boardPlace = document.getElementsByClassName('boardPlace')[0]
    boardPlace.appendChild(board);

    const controls = document.createElement('div');
    controls.id = 'controls';
    board.appendChild(controls);

    livesCounter();
    scoreCounter();
    timer();
}

function livesCounter() {
    const livesResult = document.createElement('div');
    livesResult.id = 'livesResult';
    controls.appendChild(livesResult);
    handle.updateLives(state.lives);
};

function scoreCounter() {
    const scoreResult = document.createElement('div');
    scoreResult.id = 'scoreResult';
    controls.appendChild(scoreResult);
    handle.updateScore(state.score);
};

function timer() {
    const timer = document.createElement('div');
    timer.id = 'timer';
    controls.appendChild(timer);
    handle.timeCounter();
};

function selectSize() {
    const selectSize = document.getElementById('sizeSelector');
    const value = selectSize[selectSize.selectedIndex].value;
    const size = parseInt(value);
    state.size = size;
    return size;
};

function createFields(size) {
    const fields = document.createElement('div');
    fields.id = 'fields';
    board.appendChild(fields);
    let fieldCounter = 0;

    for (let r = 0; r < size; r++) {
        const row = document.createElement('div');
        fields.appendChild(row);
        row.id = 'row' + r;
        for (let i = 0; i < size; i++) {
            const field = new Field(fieldCounter, r);
            field.create;
            fieldCounter += 1;
        };
    };
};

