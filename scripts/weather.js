// -------- WEATHER FUNCTIONALITY --------
const weatherCard = document.querySelector('.weather-card');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.04483804673634&lon=-122.89429741227816&units=imperial&appid=375385acfd2acb8edc3fe91e2228d658';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {
    const title = document.createElement('h3');
    const temperature = document.createElement('p');
    const figure = document.createElement('figure');
    const icon = document.createElement('img');
    const figCaption = document.createElement('figcaption');

    title.textContent = `Weather in ${data.name}`;
    temperature.innerHTML = `The current temperature is: ${data.main.temp}&deg;F`;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    icon.setAttribute('alt', data.weather[0].description);
    icon.setAttribute('width', '40');
    icon.setAttribute('height', '40');
    figCaption.textContent = data.weather[0].description;

    figure.appendChild(icon);
    figure.appendChild(figCaption);
    weatherCard.appendChild(title);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(figure);
    setupVisitCounter();
}

// -------- VISIT COUNTER FUNCTIONALITY --------

function setupVisitCounter() {
    const visitsElement = document.createElement('p');
    visitsElement.id = "visit-count";
    weatherCard.appendChild(visitsElement);

    let visitCount = localStorage.getItem("visitCount");

    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    localStorage.setItem("visitCount", visitCount);
    visitsElement.textContent = `Number of visits: ${visitCount}`;

    const resetButton = document.createElement('button');
    resetButton.id = "reset-counter";
    resetButton.textContent = "Reset Counter";
    weatherCard.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
        localStorage.removeItem("visitCount");
        visitsElement.textContent = "Number of visits: 0";
        alert("Counter has been reset!");
        location.reload();
    });
}

// -------- LINKS COUNTER FUNCTIONALITY --------

const baseURL = "https://yourdesignerfriends.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.querySelector(".learning-card");
    const list = document.createElement("ul");

    weeks.forEach(week => {
        let listItem = document.createElement("li");
        listItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            let anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = "_blank";

            listItem.appendChild(anchor);

            if (index < week.links.length - 1) {
                let separator = document.createTextNode(" | ");
                listItem.appendChild(separator);
            }
        });

        list.appendChild(listItem);
    });

    linksContainer.appendChild(list);
}

getLinks();