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
        logo.setAttribute("src", `images/${member.image}`);
        logo.setAttribute("alt", `Logo of ${member.name}`);
        card.appendChild(logo);
        card.appendChild(name);
        spotlight.appendChild(card);
    });
}

getSpotlight();

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=26.30&lon=-98.16&units=imperial&appid=f3446b96c5082c24aab5d9c609add400';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch();
