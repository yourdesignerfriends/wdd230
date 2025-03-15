const modeButton = document.querySelector("#darkBtn");

modeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Toggle the SVG icon
    if (document.body.classList.contains("dark-mode")) {
        modeButton.src = "images/light-mode.svg";
        modeButton.alt = "Switch to light mode";
        modeButton.setAttribute("aria-label", "Activate light mode");
    } else {
        modeButton.src = "images/dark-mode.svg";
        modeButton.alt = "Switch to dark mode";
        modeButton.setAttribute("aria-label", "Activate dark mode");
    }
});