import { dataPartidos, equipos } from "./datosPartidos.js";

export class Partido {
    dia;
    hora;
    logoLiga;
    nombreLiga;
    lugar;
    equipoLocal;
    logoLocal;
    equipoVisitante;
    logoVisitante;

    constructor({dia, hora, logoLiga, nombreLiga, lugar, equipoLocal, logoLocal, equipoVisitante, logoVisitante}){
        this.dia = dia;
        this.hora = hora;
        this.logoLiga = logoLiga;
        this.nombreLiga = nombreLiga;
        this.lugar = lugar;
        this.equipoLocal = equipoLocal;
        this.logoLocal = logoLocal;
        this.equipoVisitante = equipoVisitante;
        this.logoVisitante = logoVisitante;
    }
}

export class MesPartidos {
    mes;
    data;

    constructor({mes, data}){
        this.mes = mes;
        this.data = data.map(p => new Partido(p));
    }
}

export class Calendario {
    partidos;

    constructor(dataPartidos) {
        this.partidos = dataPartidos.map(
            mes => new MesPartidos(mes)
        );
    }

    getPartidos() {
        return this.partidos;
    }

    getPartidosxMes(mes) {
        return this.partidos.find(p => p.mes == mes);
    }

    obtenerDataMes(mes) {
        return this.getPartidosxMes(mes)?.data || [];
    }
}

const calendario = new Calendario(dataPartidos);

const tablaPartidos = document.getElementById("tablaPartidos");

const botonesMes = document.querySelectorAll(".month");

function mostrarPartidos(mes){

    const mesSeleccionado = calendario.getPartidosxMes(mes);

    tablaPartidos.innerHTML = "";

    if(!mesSeleccionado) return;

    mesSeleccionado.data.forEach(partido=>{

        tablaPartidos.innerHTML += `
            <tr>
                <td>
                    <span>${partido.dia}</span><br>
                    <span>${partido.hora}</span>
                </td>
                <td>
                    <img src="../assets/Images/Logo/${partido.logoLiga}">
                </td>
                <td>
                    <span>${partido.nombreLiga}</span><br>
                    <span>${partido.lugar}</span>
                </td>
                <td>
                    <p>${partido.equipoLocal}</p>
                </td>
                <td>
                    <p>
                        <span>
                            <img src="../assets/Images/Logo/${partido.logoLocal}">
                        </span>
                        <span>vs</span>
                        <span>
                            <img src="../assets/Images/Logo/${partido.logoVisitante}">
                        </span>
                    </p>
                </td>
                <td>
                    <p>${partido.equipoVisitante}</p>
                </td>
            </tr>
        `;

    });

};

botonesMes.forEach(boton=>{

    boton.addEventListener("click",()=>{

        const mes = boton.dataset.month;

        mostrarPartidos(mes);

    });

});

mostrarPartidos("enero");

/*--------------------------------------------------------------------*/

const tablaPosiciones = document.getElementById("tablaPosiciones");

function crearCelda(texto) {
    let td = document.createElement("td");
    td.textContent = texto;
    return td;
};

function crearCeldaEquipo(nombre, logo) {
    let td = document.createElement("td");
    let span = document.createElement("span");
    let img = document.createElement("img");
    img.src = `../assets/Images/Logo/${logo}`;
    span.appendChild(img);
    td.appendChild(span);
    td.append(`${nombre}`);
    return td;

};

function crearFila(equipo, posicion) {

    let tr = document.createElement("tr");

    if (equipo.nombre === "Manco Cápac") {
        tr.classList.add("select_MancoCapac");
    }

    tr.appendChild(crearCelda(posicion + "°"));
    tr.appendChild(crearCeldaEquipo(equipo.nombre, equipo.logo));
    tr.appendChild(crearCelda(equipo.pj));
    tr.appendChild(crearCelda(equipo.pg));
    tr.appendChild(crearCelda(equipo.pp));
    tr.appendChild(crearCelda(equipo.wo));
    tr.appendChild(crearCelda(equipo.pf));
    tr.appendChild(crearCelda(equipo.pc));
    tr.appendChild(crearCelda(equipo.dp));
    tr.appendChild(crearCelda(equipo.puntaje));

    return tr;

};

function mostrarTabla(equipos) {

    tablaPosiciones.innerHTML = "";

    equipos.forEach((equipo, index) => {

        tablaPosiciones.appendChild(
            crearFila(equipo, index + 1)
        );

    });

};

mostrarTabla(equipos);