const gridContainer = document.querySelector('#gridContainer');
const resizebtn = document.querySelector('#resize');
const resetbtn = document.querySelector('#reset');
const defaultGridSize = 16;

function startGame(size) {   
    for (let i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
    
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);

            row.addEventListener('mouseenter', (e) => {
                e.target.style.background = 'blue';
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
    const gridSize = parseInt(prompt('Enter grid size: ', '16px'));
    startGame(gridSize);
})

resetbtn.addEventListener('click', () => {
    location.reload();
});


/* TO DO add extra features.
    1. Rather than squares being the same color throughout the grid, 
    randomize the squares’ RGB values with each interaction.

    2. Additionally, implement a progressive darkening effect where 
    each interaction adds 10% more black or color to the square. 
    The objective is to achieve a completely black square only after ten interactions.
*/