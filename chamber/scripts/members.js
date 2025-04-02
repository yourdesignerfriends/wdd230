const url = "https://yourdesignerfriends.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let companyName = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let logo = document.createElement('img');
    let membershipLevel = document.createElement('p');
    let description = document.createElement('p');

    companyName.textContent = member.name;
    address.textContent = `Address: ${member.address}`;
    phone.textContent = `Phone: ${member.phone}`;
    website.textContent = member.website;
    website.href = member.website;
    website.target = '_blank';
    logo.setAttribute('src', member.image);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '150');
    logo.setAttribute('height', '150');
    membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
    description.textContent = `Description: ${member.description}`;

    card.appendChild(logo);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membershipLevel);
    card.appendChild(description);

    cards.appendChild(card);
  });
};