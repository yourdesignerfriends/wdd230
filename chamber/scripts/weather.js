const weather = document.getElementById('weather');
const forecast = document.getElementById('forecast');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=47.04483804673634&lon=-122.89429741227816&units=imperial&appid=375385acfd2acb8edc3fe91e2228d658';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.04483804673634&lon=-122.89429741227816&units=imperial&appid=375385acfd2acb8edc3fe91e2228d658';

async function apiFetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const section = document.createElement('section');
    const title = document.createElement('h3');
    const temperature = document.createElement('p');
    const figure = document.createElement('figure');
    const icon = document.createElement('img');
    const figCaption = document.createElement('figcaption');

    title.textContent = `Actual Weather in ${data.name}`;
    temperature.innerHTML = `The current temperature is: ${data.main.temp}&deg;F`;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
    icon.setAttribute('alt', data.weather[0].description);
    icon.setAttribute('width', '80');
    icon.setAttribute('height', '80');
    figCaption.textContent = data.weather[0].description;

    weather.appendChild(section);
    section.appendChild(title);
    section.appendChild(figure);
    figure.appendChild(icon);
    figure.appendChild(figCaption);
    section.appendChild(temperature);
}

function displayForecast(data) {
    const threeDayForecast = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

    threeDayForecast.forEach(day => {
        const section = document.createElement('section');
        const date = document.createElement('p');
        const temp = document.createElement('p');
        const figure = document.createElement('figure');
        const icon = document.createElement('img');
        const figCaption = document.createElement('figcaption');

        date.textContent = `Date: ${day.dt_txt}`;
        temp.textContent = `Temperature: ${day.main.temp}&deg;F`;
        icon.setAttribute('src', `https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`);
        icon.setAttribute('alt', day.weather[0].description);
        icon.setAttribute('width', '80');
        icon.setAttribute('height', '80');
        figCaption.textContent = day.weather[0].description;

        figure.appendChild(icon);
        figure.appendChild(figCaption);
        section.appendChild(date);
        section.appendChild(temp);
        section.appendChild(figure);
        forecast.appendChild(section);
    });
}

apiFetchWeather();
apiFetchForecast();