class TicTacToe {
    constructor() {
        this.matrix = [['n', 'n', 'n'],['n', 'n', 'n'],['n', 'n', 'n']];
        this.counter = 9;
        this.previous = '';
        this.turn = 'x';
        this.isWinner = false;
    }

    getCurrentPlayerSymbol() {
        // должен вернуться x или o
        return this.turn;
    }

    nextTurn(rowIndex, columnIndex) {
        // должен правильно обновить состояние класса (изменить текущего игрока, обновить хранилище меток и т. д.)

        // если поле свободно
        if (this.matrix[rowIndex][columnIndex] == 'n') {
            // обновим хранилище меток
            this.matrix[rowIndex][columnIndex] = this.turn;

            this.getWinner();

            // изменим текущего игрока
            if (this.turn == 'x') {
                this.previous = 'x';
                this.turn = 'o';
            } else {
                this.previous = 'o';
                this.turn = 'x';
            }

            // сократим количество возможных ходов
            this.counter -= 1;
        }
        
    }

    isFinished() {
        // должен возвращать истину, если игра завершена (например, есть победитель или это ничья)
        if (this.counter == 0 || this.isWinner == true ) {

            return true;         
        }

        return false; 
    }

    getWinner() {
        // должен возвращать символ победителя (x или o) или null, если победителя еще нет

        if (this.matrix[0][0] !== 'n' && this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][0] == this.matrix[0][2] ||
            this.matrix[1][0] !== 'n' && this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][0] == this.matrix[1][2] ||
            this.matrix[2][0] !== 'n' && this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][0] == this.matrix[2][2] ||

            this.matrix[0][0] !== 'n' && this.matrix[0][0] == this.matrix[1][0] && this.matrix[0][0] == this.matrix[2][0] ||
            this.matrix[0][1] !== 'n' && this.matrix[0][1] == this.matrix[1][1] && this.matrix[0][1] == this.matrix[2][1] ||
            this.matrix[0][2] !== 'n' && this.matrix[0][2] == this.matrix[1][2] && this.matrix[0][2] == this.matrix[2][2] ||
            
            this.matrix[0][0] !== 'n' && this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2] ||
            this.matrix[0][2] !== 'n' && this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0]   ) {

                this.isWinner = true;
                return this.previous;

        } else {
            this.isWinner = false;
        }

        return null;
    }

    noMoreTurns() {
        // должен вернуть истину, если больше нет полей для размещения x или o
        if (this.counter <= 0) {
            return true;
        }
        return false;
    }

    isDraw() {
        // должен вернуть истину, если ходов больше нет и нет победителя
        this.getWinner();

        if (this.isWinner == true && this.counter > 0) {
            return false;
        }

        if (this.counter <= 0 && this.isWinner == false) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        // должен возвращать matrix[row][col]значение (если есть) или null
        if (this.matrix[rowIndex][colIndex] != 'n') {

            return this.matrix[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
