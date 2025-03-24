let visitsDisplay = document.querySelector(".visits");

let lastVisit = localStorage.getItem("last-check");

if (!lastVisit) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const currentDate = new Date();
    const previousVisitDate = new Date(lastVisit);
    const timeDifference = currentDate - previousVisitDate;
    const oneDay = 24 * 60 * 60 * 1000;

    if (timeDifference < oneDay) {
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else {
        const daysBetweenVisits = Math.floor(timeDifference / oneDay);
        const dayText = daysBetweenVisits === 1 ? "day" : "days";
        visitsDisplay.textContent = "You last checked in " + daysBetweenVisits + " " + dayText + " ago.";
    }
}

localStorage.setItem("last-check", new Date().toString());