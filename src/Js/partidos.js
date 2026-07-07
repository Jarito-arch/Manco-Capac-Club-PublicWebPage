import { dataPartidos } from "./datosPartidos.js";

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