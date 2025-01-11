// Select the counter and button elements
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

// Initialize the counter value
let count = 0;

// Add a click event listener to the button
incrementButton.addEventListener('click', () => {
    // Increment the count
    count += 1;

    // Update the counter's text
    counterElement.textContent = count;
});
