import { createGameMenu } from "./gameMenu.js"
import { tetrisContent } from "./gameContents.js"
import { addHoverForButtons } from "./sketch-btn.js"
import { colors, tetrominoItems } from "./tetrominoItems.js"
import { shuffle } from "./utils.js"

const app = (difficulty) => {
    const gameContent = document.querySelector('.game-content')
    gameContent.innerHTML = ''
    gameContent.innerHTML = tetrisContent;

    const canvas = document.getElementById('game')
    const context = canvas.getContext('2d')

    const startBtn = document.querySelector('.start');
    const pauseBtn = document.querySelector('.pause');
    const restart = document.querySelector('.restart');
    const scoreBlock = document.querySelector('.score_total');
    const topArrow = document.querySelector('.top');
    const bottomArrow = document.querySelector('.bottom');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');

    const squareSize = 32
    let tetrominoOrder = []
    let playArea = []

    for (let row = -2; row < 20; row++) {
        playArea[row] = []

        for (let col = 0; col < 10; col++) {
            playArea[row][col] = 0
        }
    }

    let count = 0
    let tetromino = createTetromino()
    let score = 0
    let isGameOver = false
    let requestAnimationId = null

    function createTetromino() {
        if (tetrominoOrder.length === 0) {
            tetrominoOrder = ['I', 'J', 'L', 'O', 'S', 'T', 'Z']
            shuffle(tetrominoOrder)
        }


        const name = tetrominoOrder.pop()
        const matrix = tetrominoItems[name]

        const col = playArea[0].length / 2 - Math.ceil(matrix[0].length / 2)
        const row = name === 'I' ? -1 : -2;

        return {
            name,
            matrix,
            row,
            col
        }

    }

    const game = () => {
        requestAnimationId = requestAnimationFrame(game)
        context.clearRect(0, 0, canvas.width, canvas.height)

        if (tetromino) {
            if (++count > difficulty) {
                tetromino.row++
                count = 0
            }
        }
        context.fillStyle = colors[tetromino.name]

        for (let row = 0; row < tetromino.matrix.length; row++) {
            for (let col = 0; col < tetromino.matrix[row].length; col++) {
                if (tetromino.matrix[row][col]) {
                    context.fillRect((tetromino.col + col) * squareSize, (tetromino.row + row) * squareSize, squareSize - 1, squareSize - 1);

                }

            }
        }
    }

    startBtn.addEventListener('click', () => requestAnimationId = requestAnimationFrame(game))


    addHoverForButtons()

}

createGameMenu(app);
