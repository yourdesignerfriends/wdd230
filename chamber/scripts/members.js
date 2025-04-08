const url = "https://yourdesignerfriends.github.io/wdd230/chamber/data/members.json";
const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
  //membersContainer.innerHTML = "";
  members.forEach((member) => {
    let card = document.createElement("section");
    let companyName = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let logo = document.createElement("img");
    let membershipLevel = document.createElement("p");

    companyName.textContent = member.name;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    website.textContent = member.website;
    website.href = member.website;
    website.target = "_blank";
    logo.setAttribute("src", member.image);
    logo.setAttribute("alt", `Logo of ${member.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "190");
    logo.setAttribute("height", "143");
    membershipLevel.textContent = `${member.membershipLevel}`;

    card.appendChild(logo);
    card.appendChild(companyName);
    card.appendChild(website);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membershipLevel);

    membersContainer.appendChild(card);
  });
};

gridBtn.addEventListener("click", () => {
  membersContainer.classList.remove("list");
  membersContainer.classList.add("grid");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.remove("grid");
  membersContainer.classList.add("list");
});