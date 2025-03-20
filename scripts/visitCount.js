const visitsElement = document.getElementById("visit-count");

let visitCount = localStorage.getItem("visitCount");

if (!visitCount) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);

visitsElement.textContent = `Number of visits: ${visitCount}`;

const resetButton = document.getElementById("reset-counter");

resetButton.addEventListener("click", () => {
    localStorage.removeItem("visitCount");
    visitsElement.textContent = "Number of visits: 0";
    alert("Counter has been reset!");
    location.reload();
});