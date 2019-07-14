import * as handle from './handleGame';
import { state } from './index';

export function clearTable() {
    const gameBoard = document.getElementById('board');
    if (gameBoard != undefined) {
        for (var i = 1; i < 444; i++)
            window.clearInterval(i);
        gameBoard.remove();
    }
};

export function generateBoard() {
    createStatePanel();
    createFields(selectSize());
};

function createStatePanel() {
    const board = document.createElement('div')
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
    return size;
};

function createFields(size) {
    const fields = document.createElement('div');
    fields.id = 'fields';
    board.appendChild(fields);
    const numberOfFields = size * size;

    for (let i = 0; i < numberOfFields; i++) {
        const field = document.createElement('div');
        field.className = 'field';
        fields.appendChild(field);
        const nextLine = i % size;
        if (nextLine + 1 === size) {
            const newLine = document.createElement('div');
            newLine.className = 'newLine';
            fields.appendChild(newLine);
        }
    }
};