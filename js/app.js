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

    crearEstructura();
}