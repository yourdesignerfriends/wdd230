const form = document.querySelector(".form-s");
const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#re-password");
const emailInput = document.getElementById("email");
const message = document.querySelector("#formmessage");
const rangeInput = document.getElementById("pageRating");
const ratingValue = document.getElementById("ratingValue");

form.addEventListener("submit", validateForm);
kp2.addEventListener("focusout", checkSame);
rangeInput.addEventListener("input", () => {
    ratingValue.textContent = rangeInput.value;
});

function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.classList.remove("hidden");
        message.classList.add("visible");
        kp2.classList.add("error-background");
        kp2.value = "";
        kp2.focus();
    } else {
        message.classList.remove("visible");
        message.classList.add("hidden");
        kp2.classList.remove("error-background");
        kp2.classList.add("default-background");
    }
}

function validateForm(event) {
    message.textContent = "";
    let isValid = true;

    if (!emailInput.checkValidity()) {
        message.textContent = "❗Please enter a valid email address (must be from the byui.edu domain).";
        message.classList.remove("hidden");
        message.classList.add("visible");
        isValid = false;
    }

    if (kp1.value !== kp2.value) {
        message.textContent += " ❗Passwords DO NOT MATCH!";
        message.classList.remove("hidden");
        message.classList.add("visible");
        kp2.classList.add("error-background");
        kp2.value = "";
        kp2.focus();
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
}