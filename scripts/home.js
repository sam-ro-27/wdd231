const today = new Date();
const year = today.getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleString();
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedString}`;

const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${lastModifiedString}`;
}
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
});
