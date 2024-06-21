document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
})

const errorMessage = document.querySelector('.js-message');
const inputGridSize = document.querySelector('#input-grid');
const submitButton = document.querySelector('.submit-button');
const clearButton = document.querySelector('.clear-button');
const grid = document.querySelector('.grid-container');


submitButton.addEventListener('click', () => {
    if (inputGridSize.value <= 9) {
        errorMessage.textContent = 'ERROR: Grid size is too small.'
    } else if (inputGridSize.value > 100) {
        errorMessage.textContent = 'ERROR: Grid size is too big'
    } else {
        errorMessage.textContent = '';
        createGrid(inputGridSize.value);
    }
});


clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearGrid();
});


function createGrid(size) {
    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let square = document.createElement('div');
        square.classList.add('cell');
        square.addEventListener('mousemove', colorDiv);
        square.addEventListener('transitionend', deactivateGridElement);
        grid.append(square);
    };
};

function colorDiv() {
    this.classList.add("grid-hover");
    this.style.background = 'black';
};

function deactivateGridElement(event) {
    if (event.propertyName == "transform") {
        this.classList.remove("grid-hover");
    }
    this.style.background = 'rgb(55,55,55)';
}

function clearGrid() {
    const squares = document.querySelectorAll('.cell');
    squares.forEach(square => {
        square.style.background = 'white';
    });
};