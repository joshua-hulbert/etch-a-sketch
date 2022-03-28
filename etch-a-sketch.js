const DEFAULT_SIZE = 16;

const container = document.querySelector('#container');

// function createGridSquare(size, row, col) {
//     const square = document.createElement('div');
//     square.classList.add('square-div');
//     square.style.backgroundColor = 'blue';
//     square.style.width = size;
//     square.style.height = size;
//     square.style.gridRow = row;
//     square.style.gridColumn = col;
//     return square;
// }

// function createGrid() {
//     for (let row = 0; row < DEFAULT_SIZE; row++) {
//         for (let col = 0; col < DEFAULT_SIZE; col++) {
//             container.appendChild(createGridSquare(container.clientWidth / DEFAULT_SIZE, row, col));
//         }
//     }
// }

// createGrid();

function createGridSquare(size, col, row) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.gridColumn = col;
    square.style.gridRow = row;
    return square;
}

function createGrid() {
    for (let row = 1; row <= DEFAULT_SIZE; row++) {
        for (let col = 1; col <= DEFAULT_SIZE; col++) {
            container.appendChild(createGridSquare(container.clientWidth / DEFAULT_SIZE, col, row));
        }
    }
}

createGrid();