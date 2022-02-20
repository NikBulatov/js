'use strict';
const settings = { // настройки
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
    startDirection: 'right',
    stepsInSecond: 5,
    playerCellColor: '#AA3333',
    emptyCellColor: '#eee',
};

const player = { // игрок
    x: null,
    y: null,
    direction: null,

    setDirection(direction) { // направление
        this.direction = direction;
    },

    init(startX, startY, direction) { // начальное положение и направление
        this.setDirection(direction);
        this.x = startX;
        this.y = startY;
    },

    makeStep() { // шаг
        const nextPoint = this.getNextStepPoint();

        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

    getNextStepPoint() { // следующая точка
        const currentPoint = { // текущая точка
            x: this.x,
            y: this.y,
        };

        switch (this.direction) { // меняем точку 
            case 'up':
                currentPoint.y--;
                break;
            case 'right':
                currentPoint.x++;
                break;
            case 'down':
                currentPoint.y++;
                break;
            case 'left':
                currentPoint.x--;
                break;
        }

        return currentPoint;
    },
};

const game = { // сама игра
    player,
    settings,
    containerElement: null,
    cellElements: [],

    run() { // запуск
        this.init(); // инициализация

        this.render(); // создание поля

        setInterval(() => {
            if (this.canPlayerMakeStep()) {
                this.player.makeStep();
                this.render();
            }
        }, 1000 / this.settings.stepsInSecond);
    },

    init() {
        this.containerElement = document.getElementById('game');
        this.player.init(
            this.settings.startPositionX,
            this.settings.startPositionY,
            this.settings.startDirection
        );

        this.initCells();
        this.initEventHandlers();
    },

    initCells() { // создаём ячейки
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.settings.rowCount; row++) { // строки
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let col = 0; col < this.settings.colCount; col++) { // колонки
                const td = document.createElement('td');
                tr.appendChild(td);

                this.cellElements.push(td);
            }
        }

        console.log(this.cellElements);
    },

    render() {
        this.cellElements.forEach((cell) => { // делаем пустыми
            cell.style.backgroundColor = this.settings.emptyCellColor;
        });

        const playerCell = this.containerElement
            .querySelector(`tr:nth-child(${this.player.y + 1})`)
            .querySelector(`td:nth-child(${this.player.x + 1})`);

        playerCell.style.backgroundColor = this.settings.playerCellColor;
    },

    initEventHandlers() { // клавиатурные события
        document.addEventListener('keydown', function (event) {
            this.keyDownHandler(event)
        }.bind(this)); // смена контекста
    },

    keyDownHandler(event) {
        switch (event.code) {
            case 'KeyW':
            case 'ArrowUp':
                this.player.setDirection('up');
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.player.setDirection('right');
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.player.setDirection('down');
                break;
            case 'KeyA':
            case 'ArrowLeft':
                this.player.setDirection('left');
                break;
        }
    },

    canPlayerMakeStep() { // проверка на возможность шага
        const nextPoint = this.player.getNextStepPoint();

        return nextPoint.x >= 0 &&
            nextPoint.x < this.settings.colCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < this.settings.rowCount;
    }
};

game.run();
