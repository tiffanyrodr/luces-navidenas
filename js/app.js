const patron1 = ["red", "green", "red", "green", "red", "green", "red", "green", "red", "green"];
const patron2 = ["blue", "yellow", "blue", "yellow", "blue", "yellow", "blue", "yellow", "blue", "yellow"];
const patron3 = ["green", "green", "red", "red", "green", "green", "red", "red", "green", "green"];
const patron4 = ["yellow", "blue", "red", "yellow", "blue", "red", "yellow", "blue", "red", "yellow"];
const patron5 = ["red", "red", "red", "red", "red", "green", "green", "green", "green", "green"];

const patrones = [patron1, patron2, patron3, patron4, patron5];

function generarColorAleatorio() {
    const colores = ["red", "green", "blue", "yellow", "brown", "pink", "orange", "gray"];
    return colores[Math.floor(Math.random() * colores.length)];
}

function generarPatronAleatorio() {
    const nuevoPatron = [];
    for (let i = 0; i < 10; i++) {
        nuevoPatron.push(generarColorAleatorio());
    }
    return nuevoPatron;
}

let indicePatron = 0;
let velocidad = 1000;
let animacionActiva = true;
let timeoutId = null;

const app = document.getElementById("app");

function crearEstructura() {
    const container = document.createElement("div");
    container.classList.add("container");

    const titulo = document.createElement("h1");
    titulo.textContent = "Luces Navideñas Animadas";

    const lucesRow = document.createElement("div");
    lucesRow.classList.add("luces-row");
    lucesRow.id = "luces-row";

    const indicador = document.createElement("div");
    indicador.classList.add("patron-indicador");
    indicador.id = "patron-indicador";
    indicador.textContent = `Patrón ${indicePatron + 1}/${patrones.length}`;

    const controls = document.createElement("div");
    controls.classList.add("controls");

    const btnPausa = document.createElement("button");
    btnPausa.textContent = "Pausa";
    btnPausa.onclick = () => {
        animacionActiva = false;
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    };

    const btnReanudar = document.createElement("button");
    btnReanudar.textContent = "Reanudar";
    btnReanudar.onclick = () => {
        if (!animacionActiva) {
            animacionActiva = true;
            iniciarAnimacion();
        }
    };

    const btnMasRapido = document.createElement("button");
    btnMasRapido.textContent = "Más rápido";
    btnMasRapido.onclick = () => {
        velocidad = Math.max(200, velocidad - 300);
    };

    const btnMasLento = document.createElement("button");
    btnMasLento.textContent = "Más lento";
    btnMasLento.onclick = () => {
        velocidad = velocidad + 300;
    };

    const btnAleatorio = document.createElement("button");
    btnAleatorio.textContent = "Patrón Aleatorio";
    btnAleatorio.onclick = () => {
        const nuevo = generarPatronAleatorio();
        patrones.push(nuevo);
        indicePatron = patrones.length - 1;
        actualizarLuces(nuevo);
    };

    const btnDark = document.createElement("button");
    btnDark.textContent = "Modo Oscuro";
    btnDark.onclick = () => {
        document.body.classList.toggle("dark-mode");
    };

    controls.appendChild(btnPausa);
    controls.appendChild(btnReanudar);
    controls.appendChild(btnMasRapido);
    controls.appendChild(btnMasLento);
    controls.appendChild(btnAleatorio);
    controls.appendChild(btnDark);

    container.appendChild(titulo);
    container.appendChild(lucesRow);
    container.appendChild(indicador);
    container.appendChild(controls);

    app.appendChild(container);
}

function crearLuces() {
    const lucesRow = document.getElementById("luces-row");
    for (let i = 0; i < 10; i++) {
        const luz = document.createElement("div");
        luz.classList.add("luz");
        luz.style.backgroundColor = "gray";
        lucesRow.appendChild(luz);
    }
}

function actualizarLuces(patron) {
    const luces = document.querySelectorAll(".luz");
    luces.forEach((luz, i) => {
        luz.style.backgroundColor = patron[i];
    });

    const indicador = document.getElementById("patron-indicador");
    if (indicador) {
        indicador.textContent = `Patrón ${indicePatron + 1}/${patrones.length}`;
    }
}

function iniciarAnimacion() {
    if (!animacionActiva) return;

    const patronActual = patrones[indicePatron];
    actualizarLuces(patronActual);

    indicePatron = (indicePatron + 1) % patrones.length;

    timeoutId = setTimeout(() => {
        if (animacionActiva) iniciarAnimacion();
    }, velocidad);
}

crearEstructura();
crearLuces();
iniciarAnimacion();


