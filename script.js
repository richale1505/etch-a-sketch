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
