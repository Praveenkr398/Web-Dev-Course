let currentCalculation = '';
let history = [];

// Function to append values to the calculation
function appendToCalculation(value) {
    currentCalculation += value;
    document.getElementById('calculation').innerText = currentCalculation;
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(currentCalculation); // simple calculation using eval
        if (result === Infinity || isNaN(result)) {
            result = 'Error';
        }
        document.getElementById('result').innerText = result;
        addHistory(currentCalculation, result);
        // currentCalculation = ''; // Reset after calculation
        // document.getElementById('calculation').innerText = '';
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}

// Function to clear the calculation
function clearCalculation() {
    currentCalculation = '';
    document.getElementById('calculation').innerText = '';
    document.getElementById('result').innerText = '';
}

// Function to add calculation to history
function addHistory(calculation, result) {
    const historyItem = { calculation, result };
    history.push(historyItem);
    updateHistoryList();
}

// Function to update the history list
function updateHistoryList() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.calculation} = ${item.result}</span>
            <button onclick="deleteHistory(${index})">Delete</button>
        `;
        historyList.prepend(li);
    });
}

// Function to delete an item from history
function deleteHistory(index) {
    history.splice(index, 1);
    updateHistoryList();
}

// Function to toggle the history section
function toggleHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.style.display = (historyContainer.style.display === 'block') ? 'none' : 'block';
}


// Function to play the sound on button press
function playSound() {
    const audio = document.getElementById('button-sound');
    audio.currentTime = 0; // Reset sound to start
    audio.play(); // Play the sound
}


// Show the original calculation when hovering over the result
function showOriginalCalculation() {
    const resultElement = document.getElementById('result');
    if (result) {
        resultElement.title = `Calculation: ${lastCalculation}`; // Display the calculation on hover
    }
}

// Hide the original calculation when the mouse leaves the result
function hideOriginalCalculation() {
    const resultElement = document.getElementById('result');
    resultElement.title = ''; // Remove the title
}
