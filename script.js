const gridContainer = document.querySelector('#gridContainer');
const resizebtn = document.querySelector('#resize');
const resetbtn = document.querySelector('#reset');
const defaultGridSize = 16;

function getRandomInt(max) {
    return parseInt(Math.random() * max);
}

function startGame(size) {   
    for (let i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
    
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);

            row.addEventListener('mouseenter', (e) => {
                let numOne = getRandomInt(255);
                let numTwo = getRandomInt(255);
                let numThree = getRandomInt(255);
                let color = `rgb(${numOne}, ${numTwo}, ${numThree})`;

                e.target.style.background = color;
            })
        }

        gridContainer.appendChild(column);
    }    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

startGame(defaultGridSize);

resizebtn.addEventListener('click', () => {
    removeAllChildNodes(gridContainer);
    const gridSize = parseInt(prompt('Enter grid size (min: 2 / max: 100): ', '16px'));

    gridSize > 100 || gridSize < 2 ? alert('invalid number') : startGame(gridSize);
})

resetbtn.addEventListener('click', () => {
    location.reload();
});