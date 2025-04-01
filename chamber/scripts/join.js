document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("form-timestamp");
    const currentTimestamp = new Date().toISOString();
    timestampField.value = currentTimestamp;

    const form = document.querySelector(".form-s");
    const formMessage = document.getElementById("formmessage");

    form.addEventListener("submit", (event) => {
        const requiredFields = form.querySelectorAll("[required]");
        let isValid = true;

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("error-background");
            } else {
                field.classList.remove("error-background");
            }
        });

        if (!isValid) {
            event.preventDefault();
            formMessage.textContent = "Please fill out all required fields before submitting.";
            formMessage.classList.add("visible");
        } else {
            formMessage.textContent = "";
            formMessage.classList.remove("visible");
        }
    });
});