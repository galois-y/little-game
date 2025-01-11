export function updateCellColor(cell, value) {
    if (value < 5) {
        cell.style.backgroundColor = "#f0f0f0"; // Default light gray
    } else if (value < 10) {
        cell.style.backgroundColor = "lightgreen"; // Greenish color
    } else if (value < 20) {
        cell.style.backgroundColor = "orange"; // Orange
    } else {
        cell.style.backgroundColor = "red"; // Red
    }
}