document.addEventListener('DOMContentLoaded', () => {
    const msToDays = 1000 * 60 * 60 * 24;
    const mainHeader = document.querySelector(".discover-main-h2");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = Date.now();

    function calculateDaysDifference(lastVisit) {
        return Math.floor((currentDate - lastVisit) / msToDays);
    }

    function getMessage(daysDifference) {
        if (daysDifference === 0) {
            return "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            return `You last visited ${daysDifference} day ago.`;
        } else {
            return `You last visited ${daysDifference} days ago.`;
        }
    }

    if (!lastVisit || isNaN(Date.parse(lastVisit))) {
        mainHeader.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDifference = calculateDaysDifference(parseInt(lastVisit, 10));
        mainHeader.textContent = getMessage(daysDifference);
    }

    localStorage.setItem("lastVisit", currentDate.toString());
});