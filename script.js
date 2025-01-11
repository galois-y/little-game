import { updateCellColor } from './colorUtils.js';

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

let count = 0;

incrementButton.addEventListener('click', () => {
    count += 1;
    counterElement.textContent = count;
});

// Select the grid container
const gridContainer = document.getElementById('grid');

// Create a 10x10 grid
const gridSize = 10;
const values = []; // Array to store the values of each cell

for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
        // Create a div for each cell
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // Initialize value for the cell
        const index = row * gridSize + col; // Calculate a unique index for each cell
        values[index] = 0; // Set the initial value to 0
        cell.textContent = values[index];

        // Add a click event listener to increment the value
        cell.addEventListener('click', () => {
            values[index] += 1; // Increment the value
            cell.textContent = values[index]; // Update the cell's displayed value
            count += 1;
            counterElement.textContent = count;
            updateCellColor(cell, values[index]);
        });

        // Add the cell to the grid
        gridContainer.appendChild(cell);
    }
}

