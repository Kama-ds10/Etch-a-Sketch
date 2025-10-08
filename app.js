


const COLUMNS = 16;
    const ROWS = 16;
    const container = document.getElementById('gridContainer');
     const resizeBtn = document.getElementById('resizeBtn');




     function createGrid(size) {
      container.innerHTML = ''; // Clear old grid
      const totalCells = size * size;
      const cellSize = 960 / size
    // Optionally show coordinates inside each cell
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLUMNS; c++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        // optional text inside each cell (row,col)
        cell.textContent = `${r + 1},${c + 1}`; 

        // Example: add a click handler to toggle color (optional)
        cell.addEventListener('click', () => {
          cell.classList.toggle('active');
          if (cell.style.backgroundColor === 'lightblue') {
            cell.style.backgroundColor = '';
          } else {
            cell.style.backgroundColor = 'lightblue';
          }
        });

        container.appendChild(cell);
      }
    }
}