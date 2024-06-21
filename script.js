document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
})





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
};

function deactivateGridElement(event) {
    if (event.propertyName == "transform") {
        this.classList.remove("grid-hover");
    }
    this.style.background = 'rgb(55,55,55)';
}