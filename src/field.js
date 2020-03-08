import { state } from './index';
import { loseLife, userClick } from './handleGame'

export class Field {
    constructor(fieldId, rowId) {
        this.fieldId = fieldId;
        this.rowId = rowId;
        state.fields.push(this);
    };

    get create() {
        return this.createElement();
    };

    get highlightAndUnderstate() {
        return this.handleHighlight();
    };

    createElement() {
        let row = document.getElementById('row' + this.rowId);
        let field = document.createElement('div');
        field.classList.add('field' + this.fieldId);
        field.classList.add('field');
        field.onclick = this.userClick;
        row.appendChild(field);
    };

    handleHighlight() {
        let field = document.getElementsByClassName('field' + this.fieldId)[0];
        field.classList.add('active');
        board.onclick = boardClicked;
        let clicked = false;

        const understateTimeout = setTimeout(understate, 2000);
        function understate() {
            field.classList.remove('active');
            if (clicked === false) {
                loseLife()
            };
            clearTimeout(understateTimeout)
        };

        function boardClicked(e) {
            clicked = true;
            userClick(e);
        };
    };
};