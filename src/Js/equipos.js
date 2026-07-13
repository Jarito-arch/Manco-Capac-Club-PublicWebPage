const jugadores = [

    { id: 1, categoria: "SUPERIOR", nombre: "Erling Haaland", numero: "#07", posicion: "Delantero", edad: "27 años", estatura: "1.94 m", peso: "88 kg", mano: "Derecha", desc: "Nacido en Noruega. Uno de los mejores delanteros del mundo. Destaca por su potencia física y definición.", img: "https://www.pexels.com/photo/man-in-white-crew-neck-t-shirt-holding-basketball-5586402/" },
    { id: 2, categoria: "SUPERIOR", nombre: "Ørjan Nyland", numero: "#15", posicion: "Portero", edad: "30 años", estatura: "1.92 m", peso: "85 kg", mano: "Derecha", desc: "Nacido en Noruega. Excelente portero con gran reflejo y liderazgo en el área.", img: "../assets/equipo/Norwegian-goalkeeper.webp" },
    { id: 3, categoria: "SUPERIOR", nombre: "Matias Dyngeland", numero: "#08", posicion: "Defensa", edad: "24 años", estatura: "1.85 m", peso: "78 kg", mano: "Derecha", desc: "Joven defensor noruego con gran proyección y solidez defensiva.", img: "../assets/equipo/player3-noruega.jfif" },
    { id: 4, categoria: "SUPERIOR", nombre: "Kristoffer Ajer", numero: "#12", posicion: "Delantero", edad: "30 años", estatura: "1.88 m", peso: "82 kg", mano: "Derecha", desc: "Veterano delantero noruego. Experiencia y gol garantizado.", img: "../assets/equipo/player4-noruega.jfif" },
    { id: 5, categoria: "SUPERIOR", nombre: "Martin Ødegaard", numero: "#10", posicion: "Mediocampista", edad: "25 años", estatura: "1.78 m", peso: "68 kg", mano: "Derecha", desc: "Capitán del equipo. Visionario en el mediocampo con pases precisos.", img: "../assets/equipo/player5-noruega.jfif" },
    { id: 6, categoria: "SUPERIOR", nombre: "Sander Berge", numero: "#06", posicion: "Mediocampista", edad: "26 años", estatura: "1.95 m", peso: "90 kg", mano: "Derecha", desc: "Mediocampista físico con gran capacidad de recuperación.", img: "../assets/equipo/player6-noruega.jfif" },
    { id: 7, categoria: "SUPERIOR", nombre: "Leo Skiri Østigård", numero: "#04", posicion: "Defensa", edad: "25 años", estatura: "1.82 m", peso: "76 kg", mano: "Derecha", desc: "Defensa central sólido y con buen juego aéreo.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 8, categoria: "SUPERIOR", nombre: "Patrick Berg", numero: "#14", posicion: "Mediocampista", edad: "27 años", estatura: "1.80 m", peso: "75 kg", mano: "Derecha", desc: "Mediocampista creativo con gran técnica individual.", img: "../assets/equipo/player7-noruega.jfif" },
    { id: 9, categoria: "SUPERIOR", nombre: "Jørgen Strand Larsen", numero: "#09", posicion: "Delantero", edad: "24 años", estatura: "1.93 m", peso: "87 kg", mano: "Derecha", desc: "Delantero joven con gran capacidad goleadora.", img: "../assets/equipo/player8-noruega.jfif" },
    

    { id: 13, categoria: "SUB 19", nombre: "Antonio Nusa", numero: "#17", posicion: "Extremo", edad: "19 años", estatura: "1.80 m", peso: "72 kg", mano: "Derecha", desc: "Joven extremo con gran velocidad y dribbling.", img: "../assets/equipo/sub19-1.jfif" },
    { id: 14, categoria: "SUB 19", nombre: "Sverre Nypan", numero: "#21", posicion: "Mediocampista", edad: "18 años", estatura: "1.78 m", peso: "70 kg", mano: "Derecha", desc: "Promesa del mediocampo con visión de juego.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 15, categoria: "SUB 19", nombre: "Isak Hansen-Aarøen", numero: "#22", posicion: "Mediocampista", edad: "19 años", estatura: "1.75 m", peso: "68 kg", mano: "Derecha", desc: "Mediocampista técnico con gran control de balón.", img: "../assets/equipo/sub19-2.jpg" },
    { id: 16, categoria: "SUB 19", nombre: "Oscar Bobb", numero: "#16", posicion: "Extremo", edad: "19 años", estatura: "1.74 m", peso: "67 kg", mano: "Izquierda", desc: "Extremo habilidoso con gran capacidad de desborde.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 17, categoria: "SUB 19", nombre: "Tobias Gulliksen", numero: "#20", posicion: "Delantero", edad: "19 años", estatura: "1.82 m", peso: "75 kg", mano: "Derecha", desc: "Delantero juvenil con buena definición.", img: "../assets/equipo/sub19-3.jfif" },
    { id: 18, categoria: "SUB 19", nombre: "Jesper Daland", numero: "#05", posicion: "Defensa", edad: "19 años", estatura: "1.88 m", peso: "80 kg", mano: "Derecha", desc: "Defensa juvenil con gran proyección.", img: "../assets/equipo/sub19-4.jfif" },
    { id: 19, categoria: "SUB 19", nombre: "Markus Solbakken", numero: "#23", posicion: "Mediocampista", edad: "19 años", estatura: "1.76 m", peso: "69 kg", mano: "Derecha", desc: "Mediocampista con gran capacidad de pase.", img: "../assets/equipo/sub19-5.jfif" },
    { id: 20, categoria: "SUB 19", nombre: "Erik Botheim", numero: "#18", posicion: "Delantero", edad: "19 años", estatura: "1.86 m", peso: "78 kg", mano: "Derecha", desc: "Delantero con movilidad y olfato goleador.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 21, categoria: "SUB 19", nombre: "Kristian Arnstad", numero: "#24", posicion: "Mediocampista", edad: "19 años", estatura: "1.77 m", peso: "70 kg", mano: "Derecha", desc: "Mediocampista polivalente con gran físico.", img: "../assets/equipo/sub19-6.jfif" },

    { id: 25, categoria: "SUB 18", nombre: "Andreas Schjelderup", numero: "#07", posicion: "Extremo", edad: "18 años", estatura: "1.76 m", peso: "68 kg", mano: "Derecha", desc: "Extremo con gran técnica y velocidad.", img: "../assets/equipo/sub18.jfif" },
    { id: 26, categoria: "SUB 18", nombre: "Isak Aalberg", numero: "#08", posicion: "Mediocampista", edad: "18 años", estatura: "1.80 m", peso: "73 kg", mano: "Derecha", desc: "Mediocampista con buena visión de juego.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 27, categoria: "SUB 18", nombre: "Elias Solberg", numero: "#10", posicion: "Mediocampista", edad: "18 años", estatura: "1.78 m", peso: "71 kg", mano: "Izquierda", desc: "Mediocampista creativo con gran regate.", img: "../assets/equipo/sub18-2.jfif" },
    { id: 28, categoria: "SUB 18", nombre: "Noah Holm", numero: "#09", posicion: "Delantero", edad: "18 años", estatura: "1.88 m", peso: "81 kg", mano: "Derecha", desc: "Delantero con gran presencia física.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 29, categoria: "SUB 18", nombre: "Sebastian Tounekti", numero: "#11", posicion: "Extremo", edad: "18 años", estatura: "1.75 m", peso: "69 kg", mano: "Derecha", desc: "Extremo rápido con buen uno contra uno.", img: "../assets/equipo/sub18-3.jfif" },
    { id: 30, categoria: "SUB 18", nombre: "Emil Konradsen Ceide", numero: "#14", posicion: "Extremo", edad: "18 años", estatura: "1.81 m", peso: "74 kg", mano: "Derecha", desc: "Extremo con gran capacidad de centros.", img: "../assets/equipo/sub18-4.jfif" },
    { id: 31, categoria: "SUB 18", nombre: "Tobias Børkeeiet", numero: "#06", posicion: "Defensa", edad: "18 años", estatura: "1.89 m", peso: "83 kg", mano: "Derecha", desc: "Defensa central fuerte en el juego aéreo.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 32, categoria: "SUB 18", nombre: "Ulrik Yttergård Jenssen", numero: "#04", posicion: "Defensa", edad: "18 años", estatura: "1.86 m", peso: "80 kg", mano: "Derecha", desc: "Defensa con buen posicionamiento táctico.", img: "../assets/equipo/sub18-5.jpg" },
    { id: 33, categoria: "SUB 18", nombre: "Marius Lode", numero: "#02", posicion: "Defensa", edad: "18 años", estatura: "1.84 m", peso: "78 kg", mano: "Derecha", desc: "Lateral con gran capacidad de recuperación.", img: "../assets/equipo/sub19-1.jfif" },
    

    { id: 45, categoria: "SUB 17", nombre: "Sander Tangvik", numero: "#01", posicion: "Portero", edad: "17 años", estatura: "1.88 m", peso: "80 kg", mano: "Derecha", desc: "Portero juvenil con grandes reflejos y seguridad.", img: "../assets/equipo/sub19-3.jfif" },
    { id: 46, categoria: "SUB 17", nombre: "Leo Cornic", numero: "#02", posicion: "Defensa", edad: "17 años", estatura: "1.82 m", peso: "76 kg", mano: "Derecha", desc: "Defensa con gran capacidad de anticipación.", img: "../assets/equipo/sub18-5.jpg" },
    { id: 47, categoria: "SUB 17", nombre: "David Møller Wolfe", numero: "#03", posicion: "Defensa", edad: "17 años", estatura: "1.85 m", peso: "79 kg", mano: "Derecha", desc: "Defensa central con gran fuerza física.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 48, categoria: "SUB 17", nombre: "Håkon Røsten", numero: "#04", posicion: "Defensa", edad: "17 años", estatura: "1.87 m", peso: "81 kg", mano: "Derecha", desc: "Defensa con buen juego aéreo y salida de balón.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 49, categoria: "SUB 17", nombre: "Sondre Brunstad Fet", numero: "#06", posicion: "Mediocampista", edad: "17 años", estatura: "1.78 m", peso: "72 kg", mano: "Derecha", desc: "Mediocampista con gran capacidad de recuperación.", img: "../assets/equipo/sub19-1.jfif" },
    { id: 50, categoria: "SUB 17", nombre: "Eirik Andersen", numero: "#08", posicion: "Mediocampista", edad: "17 años", estatura: "1.80 m", peso: "74 kg", mano: "Derecha", desc: "Mediocampista con gran técnica y control.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 51, categoria: "SUB 17", nombre: "Magnus Grødem", numero: "#10", posicion: "Mediocampista", edad: "17 años", estatura: "1.83 m", peso: "77 kg", mano: "Derecha", desc: "Mediocampista con gran visión de juego.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 52, categoria: "SUB 17", nombre: "Tobias Heintz", numero: "#07", posicion: "Extremo", edad: "17 años", estatura: "1.76 m", peso: "70 kg", mano: "Derecha", desc: "Extremo con gran velocidad y dribbling.", img: "../assets/equipo/sub18-4.jfif" },
    { id: 53, categoria: "SUB 17", nombre: "Bryan Fiabema", numero: "#09", posicion: "Delantero", edad: "17 años", estatura: "1.85 m", peso: "78 kg", mano: "Derecha", desc: "Delantero con gran movilidad y definición.", img: "../assets/equipo/imgJugadorMC.png" },

    { id: 54, categoria: "SUB 16", nombre: "Isak Hansen", numero: "#01", posicion: "Portero", edad: "16 años", estatura: "1.85 m", peso: "78 kg", mano: "Derecha", desc: "Portero juvenil con gran proyección.", img: "../assets/equipo/player7-noruega.jfif" },
    { id: 55, categoria: "SUB 16", nombre: "Filip Delaveris", numero: "#05", posicion: "Defensa", edad: "16 años", estatura: "1.83 m", peso: "76 kg", mano: "Derecha", desc: "Defensa con gran capacidad de lectura del juego.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 56, categoria: "SUB 16", nombre: "Tobias Christensen", numero: "#08", posicion: "Mediocampista", edad: "16 años", estatura: "1.78 m", peso: "72 kg", mano: "Derecha", desc: "Mediocampista con gran técnica individual.", img: "../assets/equipo/sub19-3.jfif" },
    { id: 57, categoria: "SUB 16", nombre: "Erik Botheim Jr.", numero: "#09", posicion: "Delantero", edad: "16 años", estatura: "1.84 m", peso: "75 kg", mano: "Derecha", desc: "Delantero con gran olfato goleador.", img: "../assets/equipo/player3-noruega.jfif" },
    { id: 58, categoria: "SUB 16", nombre: "Sander Kartum", numero: "#06", posicion: "Mediocampista", edad: "16 años", estatura: "1.80 m", peso: "73 kg", mano: "Derecha", desc: "Mediocampista con gran capacidad de pase.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 59, categoria: "SUB 16", nombre: "Vetle Walle Egeli", numero: "#02", posicion: "Defensa", edad: "16 años", estatura: "1.82 m", peso: "76 kg", mano: "Derecha", desc: "Defensa con gran velocidad y capacidad de recuperación.", img: "../assets/equipo/player8-noruega.jfif" },
    { id: 60, categoria: "SUB 16", nombre: "Mikael Ingebrigtsen", numero: "#11", posicion: "Extremo", edad: "16 años", estatura: "1.75 m", peso: "69 kg", mano: "Derecha", desc: "Extremo con gran capacidad de desborde.", img: "../assets/equipo/imgJugadorMC.png" },


    { id: 61, categoria: "SUB 15", nombre: "Oscar Bobb Jr.", numero: "#07", posicion: "Extremo", edad: "15 años", estatura: "1.72 m", peso: "65 kg", mano: "Izquierda", desc: "Joven extremo con gran talento y habilidad.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 62, categoria: "SUB 15", nombre: "Sverre Nypan Jr.", numero: "#10", posicion: "Mediocampista", edad: "15 años", estatura: "1.74 m", peso: "66 kg", mano: "Derecha", desc: "Mediocampista con gran visión y técnica.", img: "../assets/equipo/player7-noruega.jfif" },
    { id: 63, categoria: "SUB 15", nombre: "Isak Aalberg Jr.", numero: "#08", posicion: "Mediocampista", edad: "15 años", estatura: "1.76 m", peso: "68 kg", mano: "Derecha", desc: "Mediocampista con gran capacidad de control.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 64, categoria: "SUB 15", nombre: "Antonio Nusa Jr.", numero: "#11", posicion: "Extremo", edad: "15 años", estatura: "1.75 m", peso: "67 kg", mano: "Derecha", desc: "Extremo con gran velocidad y regate.", img: "../assets/equipo/player3-noruega.jfif" },
    { id: 65, categoria: "SUB 15", nombre: "Jesper Daland Jr.", numero: "#04", posicion: "Defensa", edad: "15 años", estatura: "1.84 m", peso: "76 kg", mano: "Derecha", desc: "Defensa con gran proyección y solidez.", img: "../assets/equipo/player7-noruega.jfif" },
    { id: 66, categoria: "SUB 15", nombre: "Tobias Gulliksen Jr.", numero: "#09", posicion: "Delantero", edad: "15 años", estatura: "1.80 m", peso: "72 kg", mano: "Derecha", desc: "Delantero con gran definición y movilidad.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 67, categoria: "SUB 15", nombre: "Markus Solbakken Jr.", numero: "#06", posicion: "Mediocampista", edad: "15 años", estatura: "1.73 m", peso: "66 kg", mano: "Derecha", desc: "Mediocampista con gran capacidad de pase.", img: "../assets/equipo/player8-noruega.jfif" },
    { id: 68, categoria: "SUB 15", nombre: "Henrik Bjørdal Jr.", numero: "#02", posicion: "Defensa", edad: "15 años", estatura: "1.80 m", peso: "73 kg", mano: "Derecha", desc: "Defensa con gran capacidad de anticipación.", img: "../assets/equipo/imgJugadorMC.png" },
];

const staff = [
    { id: 101, categoria: "SUPERIOR", nombre: "Ståle Solbakken", cargo: "Director Técnico", edad: "56 años", estatura: "1.90 m", peso: "85 kg", mano: "Derecha", desc: "Experimentado entrenador noruego. Ha dirigido selecciones y clubes de primer nivel.", img: "../assets/equipo/entrenador-noruega.jfif" },
    { id: 102, categoria: "SUPERIOR", nombre: "Per-Mathias Høgmo", cargo: "Asistente Técnico", edad: "54 años", estatura: "1.85 m", peso: "80 kg", mano: "Derecha", desc: "Asistente con vasta experiencia en fútbol escandinavo.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 103, categoria: "SUB 19", nombre: "Lars Lagerbäck", cargo: "Entrenador", edad: "75 años", estatura: "1.78 m", peso: "75 kg", mano: "Derecha", desc: "Leyenda del entrenamiento nórdico. Gran formador de talentos.", img: "../assets/equipo/intructorsub19.jfif" },
    { id: 104, categoria: "SUB 19", nombre: "Hege Riise", cargo: "Preparadora Física", edad: "54 años", estatura: "1.70 m", peso: "62 kg", mano: "Derecha", desc: "Exjugadora de élite. Especialista en preparación física juvenil.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 105, categoria: "SUB 18", nombre: "Nils Johan Semb", cargo: "Entrenador Sub 18", edad: "68 años", estatura: "1.82 m", peso: "78 kg", mano: "Derecha", desc: "Entrenador con gran experiencia en categorías inferiores.", img: "../assets/equipo/sub18-entrenador.jfif" },
    { id: 106, categoria: "SUB 18", nombre: "Egil Olsen", cargo: "Analista Táctico", edad: "82 años", estatura: "1.80 m", peso: "76 kg", mano: "Derecha", desc: "Analista táctico legendario del fútbol noruego.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 107, categoria: "SUB 17", nombre: "Gunnar Halle", cargo: "Entrenador Sub 17", edad: "55 años", estatura: "1.83 m", peso: "77 kg", mano: "Derecha", desc: "Entrenador dedicado al desarrollo de jóvenes talentos.", img: "../assets/equipo/entrenador-noruega.jfif" },
    { id: 108, categoria: "SUB 17", nombre: "Mini Jakobsen", cargo: "Preparador de Porteros", edad: "57 años", estatura: "1.75 m", peso: "72 kg", mano: "Derecha", desc: "Especialista en entrenamiento de porteros juveniles.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 109, categoria: "SUB 16", nombre: "Frode Grodås", cargo: "Entrenador Sub 16", edad: "58 años", estatura: "1.87 m", peso: "84 kg", mano: "Derecha", desc: "Exportero internacional. Gran conocimiento de la portería.", img: "../assets/equipo/sub.jfif" },
    { id: 110, categoria: "SUB 16", nombre: "Thomas Rongen", cargo: "Entrenador Sub 16", edad: "68 años", estatura: "1.80 m", peso: "78 kg", mano: "Derecha", desc: "Entrenador con experiencia internacional en formación.", img: "../assets/equipo/imgJugadorMC.png" },
    { id: 111, categoria: "SUB 15", nombre: "Kjetil Wæhler", cargo: "Entrenador Sub 15", edad: "48 años", estatura: "1.85 m", peso: "80 kg", mano: "Derecha", desc: "Exdefensa profesional. Enfocado en fundamentos defensivos.", img: "../assets/equipo/sub.jfif" },
    { id: 112, categoria: "SUB 15", nombre: "Morten Gamst Pedersen", cargo: "Entrenador Sub 15", edad: "43 años", estatura: "1.83 m", peso: "78 kg", mano: "Derecha", desc: "Exjugador de élite. Especialista en técnica individual.", img: "../assets/equipo/imgJugadorMC.png" },
];

let categoriaActiva = "SUPERIOR";

function renderJugadores() {
    const grid = document.getElementById('playersGrid');
    const filtrados = jugadores.filter(j => j.categoria === categoriaActiva);

    grid.innerHTML = filtrados.map(j => `
        <article class="container1" data-categoria="${j.categoria}">
            <div class="container-grid">
                <div class="playercard">
                    <img src="${j.img}" alt="${j.nombre}" onerror="this.src='../assets/equipo/imgJugadorMC.png'">
                </div>
                <div class="click">
                    <button onclick="abrirModal(${j.id})">Ver</button>
                </div>
            </div>
        </article>
    `).join('');
}

function renderStaff() {
    const grid = document.getElementById('staffGrid');
    const filtrados = staff.filter(s => s.categoria === categoriaActiva);

    grid.innerHTML = filtrados.map(s => `
        <article class="container1" data-categoria="${s.categoria}">
            <div class="container-grid">
                <div class="playercard">
                    <img src="${s.img}" alt="${s.nombre}" onerror="this.src='../assets/equipo/imgJugadorMC.png'">
                </div>
                <div class="click">
                    <button onclick="abrirModalStaff(${s.id})">Ver</button>
                </div>
            </div>
        </article>
    `).join('');
}

function abrirModal(id) {
    const jugador = jugadores.find(j => j.id === id);
    if (!jugador) return;

    if (window.innerWidth >= 780) {
        document.getElementById("jugadorDesktopImagen").src = jugador.img;
        document.getElementById("jugadorDesktopImagen").onerror = function() { this.src = '../assets/equipo/imgJugadorMC.png'; };
        document.getElementById("jugadorDesktopNombre").textContent = jugador.nombre;
        document.getElementById("jugadorDesktopNumero").textContent = jugador.numero;
        document.getElementById("jugadorDesktopPosicion").textContent = jugador.posicion;
        document.getElementById("jugadorDesktopCategoria").textContent = jugador.categoria;
        document.getElementById("jugadorDesktopEdad").textContent = jugador.edad;
        document.getElementById("jugadorDesktopEstatura").textContent = jugador.estatura;
        document.getElementById("jugadorDesktopPeso").textContent = jugador.peso;
        document.getElementById("jugadorDesktopMano").textContent = jugador.mano;
        document.getElementById("jugadorDesktopDescripcion").textContent = jugador.desc;
        document.getElementById("modalJugadorDesktop").style.display = "flex";
    } else {
        document.getElementById('modal-img').src = jugador.img;
        document.getElementById('modal-img').onerror = function() { this.src = '../assets/equipo/imgJugadorMC.png'; };
        document.getElementById("modal-nombre").textContent = jugador.nombre;
        document.getElementById("modal-numero").textContent = jugador.numero;
        document.getElementById("modal-posicion").textContent = jugador.posicion;
        document.getElementById("modal-categoria").textContent = jugador.categoria;
        document.getElementById("modal-edad").textContent = jugador.edad;
        document.getElementById("modal-estatura").textContent = jugador.estatura;
        document.getElementById("modal-peso").textContent = jugador.peso;
        document.getElementById("modal-mano").textContent = jugador.mano;
        document.getElementById("modal-desc").textContent = jugador.desc;
        document.getElementById('modal').classList.add('activo');
    }
}

function abrirModalStaff(id) {
    const miembro = staff.find(s => s.id === id);
    if (!miembro) return;

    if (window.innerWidth >= 780) {
        document.getElementById("jugadorDesktopImagen").src = miembro.img;
        document.getElementById("jugadorDesktopImagen").onerror = function() { this.src = '../assets/equipo/imgJugadorMC.png'; };
        document.getElementById("jugadorDesktopNombre").textContent = miembro.nombre;
        document.getElementById("jugadorDesktopNumero").textContent = miembro.cargo;
        document.getElementById("jugadorDesktopPosicion").textContent = miembro.categoria;
        document.getElementById("jugadorDesktopCategoria").textContent = miembro.categoria;
        document.getElementById("jugadorDesktopEdad").textContent = miembro.edad;
        document.getElementById("jugadorDesktopEstatura").textContent = miembro.estatura;
        document.getElementById("jugadorDesktopPeso").textContent = miembro.peso;
        document.getElementById("jugadorDesktopMano").textContent = miembro.mano;
        document.getElementById("jugadorDesktopDescripcion").textContent = miembro.desc;
        document.getElementById("modalJugadorDesktop").style.display = "flex";
    } else {
        document.getElementById('modal-img').src = miembro.img;
        document.getElementById('modal-img').onerror = function() { this.src = '../assets/equipo/imgJugadorMC.png'; };
        document.getElementById("modal-nombre").textContent = miembro.nombre;
        document.getElementById("modal-numero").textContent = miembro.cargo;
        document.getElementById("modal-posicion").textContent = "Comando Técnico";
        document.getElementById("modal-categoria").textContent = miembro.categoria;
        document.getElementById("modal-edad").textContent = miembro.edad;
        document.getElementById("modal-estatura").textContent = miembro.estatura;
        document.getElementById("modal-peso").textContent = miembro.peso;
        document.getElementById("modal-mano").textContent = miembro.mano;
        document.getElementById("modal-desc").textContent = miembro.desc;
        document.getElementById('modal').classList.add('activo');
    }
}


function cerrarModal() {
    document.getElementById('modal').classList.remove('activo');
}

function cerrarModalDesktop() {
    document.getElementById("modalJugadorDesktop").style.display = "none";
}

document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) cerrarModal();
});

document.getElementById("modalJugadorDesktop").addEventListener("click", function(e) {
    if (e.target === this) cerrarModalDesktop();
});

document.querySelector(".cerrar-modal-desktop").addEventListener("click", cerrarModalDesktop);

const botonesCategoria = document.querySelectorAll(".category-button");

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", function(e) {
        e.preventDefault();

        botonesCategoria.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        categoriaActiva = this.dataset.filtro;
        renderJugadores();
        renderStaff();
    });
});

renderJugadores();
renderStaff();