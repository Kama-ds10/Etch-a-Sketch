const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize-btn');

// Main function to build the grid dynamically
function createGrid(squaresPerSide) {
    // 1. Clear out any existing grid squares first
    container.innerHTML = '';

    // 2. Calculate the exact percentage width/height for each square.
    const squareSizePercentage = 100 / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    // 3. Generate the elements
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Set the size dynamically using percentage math
        square.style.flexBasis = `${squareSizePercentage}%`;
        square.style.height = `${squareSizePercentage}%`;

        // 4. Add the hover effect using the "mouseenter" event listener
        square.addEventListener('mouseenter', () => {
            square.classList.add('active');
        });

        container.appendChild(square);
    }
}

// Button logic to prompt the user for a new size
resizeBtn.addEventListener('click', () => {
    let userInput = prompt('Enter the number of squares per side (Maximum 100):');
    
    // Convert input string to an integer
    let newSize = parseInt(userInput, 10);

    // Validation check: Make sure it's a number, greater than 0, and not exceeding 100
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(newSize);
    }
});

// Initialize the app with the default 16x16 grid on load
createGrid(16);