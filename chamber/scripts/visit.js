document.addEventListener('DOMContentLoaded', () => {
    const msToDays = 84600000;
    const mainHeader = document.querySelector(".discover-msg");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = new Date();

    function calculateDaysDifference(previousVisit) {
        const timeDifference = currentDate.getTime() - previousVisit.getTime();
        return timeDifference / msToDays;
    }

    function getMessage(daysDifference) {
        if (daysDifference > 0 && daysDifference < 1) {
            return "Back so soon! Awesome!";
        } else if (Math.floor(daysDifference) === 1) {
            return "You last visited 1 day ago.";
        } else if (daysDifference >= 1) {
            return `You last visited ${Math.floor(daysDifference)} days ago.`;
        } else {
            return "Welcome! Let us know if you have any questions.";
        }
    }

    if (lastVisit) {
        const previousVisit = new Date(lastVisit);
        const daysDifference = calculateDaysDifference(previousVisit);
        mainHeader.textContent = getMessage(daysDifference);
    } else {
        mainHeader.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", currentDate);
});