// Select the elements from the HTML
const helloHeading = document.getElementById('hello');
const changeTextButton = document.getElementById('changeText');

// Add an event listener to the button
changeTextButton.addEventListener('click', () => {
    helloHeading.textContent = 'You clicked the button!';
});