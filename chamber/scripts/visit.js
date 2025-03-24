let visitsDisplay = document.querySelector(".visits");

let lastVisit = localStorage.getItem("last-check");

if (!lastVisit) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const previousVisitTime = parseInt(lastVisit, 10);
    const currentTime = Date.now();

    const timeDifference = currentTime - previousVisitTime;
    const oneDay = 24 * 60 * 60 * 1000;

    const daysBetweenVisits = Math.floor(timeDifference / oneDay);
    const dayText = daysBetweenVisits === 1 ? "day" : "days";

    if (timeDifference < oneDay) {
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else {
        visitsDisplay.textContent = "You last checked in " + daysBetweenVisits + " " + dayText + " ago.";
    }
}

localStorage.setItem("last-check", Date.now());