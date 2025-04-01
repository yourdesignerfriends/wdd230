document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("form-timestamp");
    const currentTimestamp = new Date().toISOString();
    timestampField.value = currentTimestamp;
});