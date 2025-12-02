const patron1 = ["red", "green", "red", "green", "red", "green", "red", "green", "red", "green"];
const patron2 = ["blue", "yellow", "blue", "yellow", "blue", "yellow", "blue", "yellow", "blue", "yellow"];
const patron3 = ["green", "green", "red", "red", "green", "green", "red", "red", "green", "green"];
const patron4 = ["yellow", "blue", "red", "yellow", "blue", "red", "yellow", "blue", "red", "yellow"];
const patron5 = ["red", "red", "red", "red", "red", "green", "green", "green", "green", "green"];

const patrones = [patron1, patron2, patron3, patron4, patron5];

const app = document.getElementById("app");
function crearEstructura() {
    const container = document.createElement("div");
    container.classList.add("container");

    const titulo = document.createElement("h1");
    titulo.textContent = "Luces Navideñas Animadas";

    const lucesRow = document.createElement("div");
    lucesRow.classList.add("luces-row");
    lucesRow.id = "luces-row";

    app.appendChild(container);

    crearLuces();

function crearLuces() {
    const lucesRow = document.getElementById("luces-row");

    for (let i = 0; i < 10; i++) {
        const luz = document.createElement("div");
        luz.classList.add("luz");
        luz.style.backgroundColor = "gray";
        lucesRow.appendChild(luz);
    }
}
}