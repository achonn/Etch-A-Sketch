document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
})

const errorMessage = document.querySelector('.js-message');
const inputGridSize = document.querySelector('#input-grid');
const submitButton = document.querySelector('.submit-button');
const clearButton = document.querySelector('.clear-button');
const grid = document.querySelector('.grid-container');
const blackButton = document.querySelector('#black-grid');
const redButton = document.querySelector('#red-grid');
const blueButton = document.querySelector('#blue-grid');
const randomButton = document.querySelector('#random-grid');
const eraserButton = document.querySelector('#eraser');
let color = 'rgb(55,55,55)';

submitButton.addEventListener('click', () => {
    if (inputGridSize.value <= 9) {
        errorMessage.textContent = 'ERROR: Grid size is too small.'
    } else if (inputGridSize.value > 100) {
        errorMessage.textContent = 'ERROR: Grid size is too big'
    } else {
        errorMessage.textContent = '';
        createGrid(parseInt(inputGridSize.value));
    }
});


clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearGrid();
});

blackButton.addEventListener('click', () => {
    color = 'rgb(55,55,55)';
});

redButton.addEventListener('click', () => {
    color = 'red';
});

blueButton.addEventListener('click', () => {
    color = 'blue';
});

randomButton.addEventListener('click', () => {
    color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
})

eraserButton.addEventListener('click', () => {
    color = 'white';
})


inputGridSize.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const inputValue = parseInt(inputGridSize.value);
        if (inputValue <= 9) {
            errorMessage.textContent = 'ERROR: Grid size is too small.'
        } else if (inputValue > 100) {
            errorMessage.textContent = 'ERROR: Grid size is too big'
        } else {
            errorMessage.textContent = '';
            createGrid(inputValue);
        }
    };
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
};


function deactivateGridElement(event) {
    if (event.propertyName == "transform") {
        this.classList.remove("grid-hover");
        this.style.background = `${color}`;
    }
}

function clearGrid() {
    const squares = document.querySelectorAll('.cell');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
};