document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const spotlight = document.querySelector("#spotlight");


async function getSpotlight() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const goldSilver = data.filter((member) => member.membership >= 2);
    const random = goldSilver.sort(() => Math.random() - 0.5).slice(0, 3);
    displaySpotlight(random);
}

function displaySpotlight(members) {
    members.forEach((member) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        name.textContent = member.name;
        const logo = document.createElement("img");
        logo.setAttribute("src", `images/${fitness.jpg}`);
        logo.setAttribute("alt", `Logo of ${member.name}`);
    });
}