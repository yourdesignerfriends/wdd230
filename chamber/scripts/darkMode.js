const modeButton = document.querySelector("#darkBtn");

modeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modeButton.src = "images/light.svg";
        modeButton.alt = "Switch to light mode";
        modeButton.setAttribute("aria-label", "Activate light mode");

        document.querySelector('header img').src = "images/logo-dark.webp";
        document.querySelector('header img').alt = "Logo in dark mode";

        document.querySelector('[aria-label="facebook"] img').src = "images/facebook-dark.svg";
        document.querySelector('[aria-label="instagram"] img').src = "images/instagram-dark.svg";
        document.querySelector('[aria-label="linkedin"] img').src = "images/linkedin-dark.svg";
        document.querySelector('[aria-label="youtube"] img').src = "images/youtube-dark.svg";
    } else {
        modeButton.src = "images/dark.svg";
        modeButton.alt = "Switch to dark mode";
        modeButton.setAttribute("aria-label", "Activate dark mode");

        document.querySelector('header img').src = "images/logo-3.webp";
        document.querySelector('header img').alt = "Logo";

        document.querySelector('[aria-label="facebook"] img').src = "images/facebook.svg";
        document.querySelector('[aria-label="instagram"] img').src = "images/instagram.svg";
        document.querySelector('[aria-label="linkedin"] img').src = "images/linkedin.svg";
        document.querySelector('[aria-label="youtube"] img').src = "images/youtube.svg";
    }
});