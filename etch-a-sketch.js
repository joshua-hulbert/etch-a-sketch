const DEFAULT_SIZE = 16;
const GRID_SIZE = 640;

const container = document.querySelector('#container');

const sizeButton = document.querySelector('.size-button');
sizeButton.addEventListener('click', resizeAndClearGrid);

function makeSquareBlue() {
    this.style.backgroundColor = 'blue';
}

function resizeAndClearGrid() {
    let gridSizeSquares = prompt('Enter grid size (in squares, maximum 100)');

    let square = container.lastElementChild;
    while (square) {
        container.removeChild(square);
        square = container.lastElementChild;
    }

    createGrid(gridSizeSquares);
}

function createGridSquare(size, col, row) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.gridColumn = col;
    square.style.gridRow = row;
    return square;
}

function createGrid(size=DEFAULT_SIZE) {
    for (let row = 1; row <= size; row++) {
        for (let col = 1; col <= size; col++) {
            square = createGridSquare(GRID_SIZE / size, col, row);
            square.addEventListener('mouseenter', makeSquareBlue);
            container.appendChild(square);
        }
    }
}

createGrid();