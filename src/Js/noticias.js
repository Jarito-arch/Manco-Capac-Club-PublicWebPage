import { noticias } from "./DatosNoticias.js";

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");

const container = document.getElementById("container");
const btnMasNoticias = document.getElementById("btnMasNoticias");

const NOTICIAS_INICIALES = 9;
let extrasVisibles = false;

function openNews(id) {
    const noticia = noticias.find(n => n.id === id);
    if (!noticia) return;

    modalTitle.textContent = noticia.titulo;
    modalDate.textContent = noticia.fecha;
    modalDescription.innerHTML = noticia.contenido;

    modalImage.src = noticia.imagen;
    modalImage.alt = noticia.titulo;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeNews() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeNews();
    }
});

document.querySelector(".modal-content").addEventListener("click", function (e) {
    e.stopPropagation();
});

// --- Generación dinámica de noticias extra ---

function obtenerNoticiasExtra() {
    return noticias.slice(NOTICIAS_INICIALES);
}

function crearTarjeta(noticia) {
    const article = document.createElement("article");
    article.className = "news-card extra";
    article.onclick = () => openNews(noticia.id);

    article.innerHTML = `
        <div class="card-image-dinamica" style="background-image: url('${noticia.imagen}')"></div>
        <div class="card-info">
            <p class="date">${noticia.fecha}</p>
            <p class="description">${noticia.titulo}</p>
        </div>
    `;

    return article;
}

function actualizarTextoBoton() {
    const restantes = obtenerNoticiasExtra().length;

    if (restantes === 0) {
        btnMasNoticias.style.display = "none";
        return;
    }
btnMasNoticias.textContent = extrasVisibles
        ? "VER MENOS NOTICIAS"
        : `VER MÁS NOTICIAS (${restantes})`;
}

function mostrarMasNoticias() {
    obtenerNoticiasExtra().forEach(noticia => {
        container.appendChild(crearTarjeta(noticia));
    });

    extrasVisibles = true;
    actualizarTextoBoton();
}

function ocultarMasNoticias() {
    document.querySelectorAll(".news-card.extra").forEach(card => card.remove());

    extrasVisibles = false;
    actualizarTextoBoton();
}

btnMasNoticias.addEventListener("click", function () {
    if (extrasVisibles) {
        ocultarMasNoticias();
    } else {
        mostrarMasNoticias();
    }
});

actualizarTextoBoton();


window.openNews = openNews;