import { dataHistoria } from "./datosHistoria.js";

class Historia{
    constructor(datos){
        this.datos = datos;
    }

    getHistoria(){
        return this.datos;
    }
};



const lineaTiempo = document.getElementById("lineaTiempo");

const historia = new Historia(dataHistoria);

function crearImagen(ruta){

    let div = document.createElement("div");
    div.classList.add("imagen-historia");

    let img = document.createElement("img");

    img.src = `../assets/Images/History/${ruta}`;

    div.appendChild(img);

    return div;

};

function crearContenido(item){

    let div = document.createElement("div");

    div.classList.add("contenido");

    let estrella = document.createElement("span");
    estrella.classList.add("estrella");
    estrella.textContent = "★";

    let h3 = document.createElement("h3");
    h3.textContent = item.año;

    let h4 = document.createElement("h4");
    h4.textContent = item.titulo;

    let p = document.createElement("p");
    p.textContent = item.descripcion;

    div.append(
        estrella,
        h3,
        h4,
        p
    );

    return div;

};

function crearItem(item){

    let div = document.createElement("div");

    div.classList.add("item-historia");

    div.appendChild(crearImagen(item.imagen));

    div.appendChild(crearContenido(item));

    return div;

}

function mostrarHistoria(){

    historia.getHistoria().forEach(item =>{

        lineaTiempo.appendChild(
            crearItem(item)
        );

    });

};

mostrarHistoria();

window.addEventListener("scroll", () => {
    let scrollMaximo = 500;
    let umbral = 600;
    document.querySelectorAll('.item-historia').forEach(
        img => {
            let positionY = img.getBoundingClientRect().y;
            let opacity = positionY < scrollMaximo ? 1 : positionY < umbral ? 1 - ((positionY - scrollMaximo) / 100) : 0.2;
            opacity = Math.max(0.2, Math.min(1, opacity));
            img.style.opacity = opacity;
        }
    );
});

document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        document.body.classList.add("loaded");
    };
});