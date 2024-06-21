document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
})

function createGrid(size) {
    const grid = document.querySelector('.grid-container');

    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let numDivs = size * size;

    for (i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        grid.appendChild(div);
        div.addEventListener('mousemove', colorDiv);
        div.style.border = '1px solid grey';
    };
}

