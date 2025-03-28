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
    console.error("Some elements of the form were not found in the DOM");
}

function handleError(field, errorMessage) {
    message.textContent = errorMessage;
    message.classList.remove("hidden");
    message.classList.add("visible");
    field.classList.add("error-background");
    field.value = "";
}

function clearError(field) {
    message.classList.remove("visible");
    message.classList.add("hidden");
    field.classList.remove("error-background");
    field.classList.add("default-background");
}

function checkSame() {
    if (kp1.value !== kp2.value) {
        handleError(kp2, "Passwords DO NOT MATCH!");
    } else {
        clearError(kp2);
    }
}

function validateEmail() {
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    if (!emailPattern.test(emailValue)) {
        handleError(emailInput, "Please enter a valid email address (must be from the byui.edu domain)");
        return false;
    } else {
        clearError(emailInput);
        return true;
    }
}

function validateForm(event) {
    message.textContent = "";
    let isValid = true;

    if (!validateEmail()) {
        isValid = false;
    }

    if (kp1.value !== kp2.value) {
        handleError(kp2, "Passwords DO NOT MATCH!");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
}