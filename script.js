document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
})

const message = document.querySelector('.js-message');
const inputGridSize = document.querySelector('#input-grid');
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
    if (inputGridSize.value <= 9) {
        message.textContent = 'ERROR: Grid size is too small.'
    } else if (inputGridSize.value > 100) {
        message.textContent = 'ERROR: Grid size is too big'
    } else createGrid(inputGridSize.value);
});


function createGrid(size) {
    const grid = document.querySelector('.grid-container');

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