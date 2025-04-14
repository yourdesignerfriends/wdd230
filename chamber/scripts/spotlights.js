const url = "https://yourdesignerfriends.github.io/wdd230/chamber/data/members.json";

async function fetchMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displaySpotlights(data.members);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(members) {
    const qualifiedMembers = members.filter(member => 
        member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
    );

    const randomMembers = [];
    while (randomMembers.length < 3 && qualifiedMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        randomMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
    }

    const container = document.getElementById('spot-container');
    container.innerHTML = "";

    randomMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spot-card');

        const img = document.createElement('img');
        img.setAttribute('src', member.image);
        img.setAttribute('alt', `${member.name} Logo`);
        img.setAttribute('width', '285');
        img.setAttribute('height', '215');
        img.setAttribute('loading', 'lazy');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const description = document.createElement('p');
        description.textContent = member.address;

        const link = document.createElement('a');
        link.setAttribute('href', member.website);
        link.classList.add('common-btn');
        link.textContent = "Website";

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(link);

        container.appendChild(card);
    });
}

fetchMembers();