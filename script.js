const gridContainer = document.querySelector('#gridContainer');
const gridSize = prompt('Enter grid size: ', '16px');

for (let i = 0; i < parseInt(gridSize); i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    
    for (let i = 0; i < parseInt(gridSize); i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        column.appendChild(row);

        row.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'blue';
        })
    }

    gridContainer.appendChild(column);
}


/*
    
*/

