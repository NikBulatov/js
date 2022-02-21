/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)
*/
const chess = {
    brownCeil: '#8B4513',

    run() {
        this.init()
    },

    init() {
        this.containerElement = document.getElementById('chess');
        this.initCells();
    },

    initCells() { // создаём ячейки
        this.containerElement.innerHTML = '';
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const cols = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (rows[row] === 0 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                } else if (cols[col] === 0 && rows[row] !== 0) {
                    td.innerHTML = rows[row].toString();
                }

                if (this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = this.brownCeil;
                }
            }
        }
    },
    isCellIsBlack(rowIndx, colIndx) {
        if (rowIndx === 0 || colIndx === 0 || rowIndx === 9 || colIndx === 9) {
            return false;
        }

        return (rowIndx + colIndx) % 2 === 1;
    }
};

chess.run();
