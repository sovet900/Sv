document.addEventListener("DOMContentLoaded", () => {
    // Mock functions to calculate phases
    const getNextFullMoon = () => {
        const today = new Date();
        const fullMoon = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7); // Example: 7 days later
        return fullMoon.toLocaleDateString();
    };

    const getNextNewMoon = () => {
        const today = new Date();
        const newMoon = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14); // Example: 14 days later
        return newMoon.toLocaleDateString();
    };

    // Set phases dynamically
    document.getElementById("full-moon-date").textContent = getNextFullMoon();
    document.getElementById("new-moon-date").textContent = getNextNewMoon();

    // Load ritual description
    fetch("ritual.txt")
        .then(response => response.text())
        .then(text => {
            document.getElementById("ritual-description").textContent = text;
        })
        .catch(() => {
            document.getElementById("ritual-description").textContent = "Не удалось загрузить описание.";
        });
});
