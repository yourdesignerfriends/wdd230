const form = document.querySelector(".form-s");
const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#re-password");
const emailInput = document.getElementById("email");
const message = document.querySelector("#formmessage");
const rangeInput = document.getElementById("pageRating");
const ratingValue = document.getElementById("ratingValue");

if (form && kp1 && kp2 && emailInput && message && rangeInput && ratingValue) {
    form.addEventListener("submit", validateForm);
    kp2.addEventListener("blur", checkSame);
    rangeInput.addEventListener("input", () => {
        ratingValue.textContent = rangeInput.value;
    });
} else {
    console.error("Algunos elementos del formulario no se encontraron en el DOM.");
}

function handlePasswordMismatch() {
    message.textContent = "Passwords DO NOT MATCH!";
    message.classList.remove("hidden");
    message.classList.add("visible");
    kp2.classList.add("error-background");
    kp2.value = "";
}

function checkSame() {
    if (kp1.value !== kp2.value) {
        handlePasswordMismatch();
    } else {
        message.classList.remove("visible");
        message.classList.add("hidden");
        kp2.classList.remove("error-background");
        kp2.classList.add("default-background");
    }
}

function validateEmail() {
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    if (!emailPattern.test(emailValue)) {
        message.textContent = "Please enter a valid email address (must be from the byui.edu domain).";
        message.classList.remove("hidden");
        message.classList.add("visible");
        return false;
    }
    return true;
}

function validateForm(event) {
    message.textContent = "";
    let isValid = true;

    if (!validateEmail()) {
        isValid = false;
    }

    if (kp1.value !== kp2.value) {
        handlePasswordMismatch();
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
}