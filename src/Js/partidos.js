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