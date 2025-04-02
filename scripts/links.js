const baseURL = "https://yourdesignerfriends.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data.weeks);
    }   catch (error) {
        console.error("Error fetching links:", error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.querySelector(".card ul");
    linksContainer.innerHTML = "";

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
        linksContainer.appendChild(listItem);
    });
}

getLinks();
