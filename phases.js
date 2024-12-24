document.addEventListener("DOMContentLoaded", () => {
    // Пример расчёта фаз Луны (замените на реальную логику, если нужно)
    const getNextFullMoon = () => {
        const today = new Date();
        const fullMoon = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        return fullMoon.toLocaleDateString();
    };

    const getNextNewMoon = () => {
        const today = new Date();
        const newMoon = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
        return newMoon.toLocaleDateString();
    };

    // Заполняем данные фаз Луны
    document.getElementById("full-moon-date").textContent = getNextFullMoon();
    document.getElementById("new-moon-date").textContent = getNextNewMoon();

    // Загрузка описания ритуала
    fetch("ritual.txt")
        .then(response => response.text())
        .then(text => {
            document.getElementById("ritual-description").textContent = text;
        })
        .catch(() => {
            document.getElementById("ritual-description").textContent = "Не удалось загрузить описание.";
        });
});
