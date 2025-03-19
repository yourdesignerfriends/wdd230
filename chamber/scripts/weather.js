document.addEventListener("DOMContentLoaded", () => {
    const temperature = 75;
    const wind = 5;
    const conditions = "Partly Cloudy";

    const calculateWindChill = (T, V) => {
        if (T <= 50 && V > 3) {
            return (35.74 + (0.6215 * T) - (35.75 * Math.pow(V, 0.16)) + (0.4275 * T * Math.pow(V, 0.16))).toFixed(2);
        }
        return "N/A";
    };

    const updateWeatherDetails = () => {
        document.getElementById("temp").innerHTML = `${temperature}&deg;F`;
        document.getElementById("condition").innerHTML = conditions;
        document.getElementById("wind").innerHTML = `${wind} mph`;
        document.getElementById("chill").innerHTML = `${calculateWindChill(temperature, wind)}`;
    };

    try {
        updateWeatherDetails();
    } catch (error) {
        console.error("Error updating weather details:", error);
    }
});