const jugadores = [

    { id: 1, categoria: "SUPERIOR", nombre: "LeBron James", numero: "#23", posicion: "Alero", edad: "41 años", estatura: "2.06 m", peso: "113 kg", mano: "Derecha", desc: "Nacido en Akron, Ohio (Estados Unidos). Considerado uno de los mejores jugadores de la historia del baloncesto. Destaca por su liderazgo, inteligencia de juego, potencia física y capacidad para anotar, asistir y defender.", img: "../assets/equipo/images.jfif" },
    { id: 2, categoria: "SUPERIOR", nombre: "Stephen Curry", numero: "#30", posicion: "Base", edad: "38 años", estatura: "1.88 m", peso: "84 kg", mano: "Derecha", desc: "Nacido en Akron, Ohio (Estados Unidos). Reconocido como el mejor tirador de tres puntos de la historia. Destaca por su precisión, velocidad y liderazgo.", img: "../assets/equipo/superior22.jpg" },
    { id: 3, categoria: "SUPERIOR", nombre: "Kevin Durant", numero: "#35", posicion: "Alero", edad: "37 años", estatura: "2.11 m", peso: "109 kg", mano: "Derecha", desc: "Nacido en Washington D. C. (Estados Unidos). Uno de los anotadores más completos del baloncesto gracias a su altura y excelente lanzamiento.", img: "../assets/equipo/superior.jpg" },
    { id: 4, categoria: "SUPERIOR", nombre: "Giannis Antetokounmpo", numero: "#34", posicion: "Ala-Pívot", edad: "32 años", estatura: "2.11 m", peso: "110 kg", mano: "Derecha", desc: "Nacido en Atenas, Grecia. Destaca por su potencia física, velocidad y capacidad para dominar ambos lados de la cancha.", img: "../assets/equipo/superior13.jpg" },
    { id: 5, categoria: "SUPERIOR", nombre: "Luka Dončić", numero: "#77", posicion: "Base", edad: "27 años", estatura: "2.01 m", peso: "104 kg", mano: "Izquierda", desc: "Nacido en Liubliana, Eslovenia. Sobresale por su visión de juego, creatividad y habilidad para anotar desde cualquier distancia.", img: "../assets/equipo/superior14.jpg" },
    { id: 6, categoria: "SUPERIOR", nombre: "Nikola Jokić", numero: "#15", posicion: "Pívot", edad: "31 años", estatura: "2.11 m", peso: "129 kg", mano: "Derecha", desc: "Nacido en Sombor, Serbia. Reconocido por su extraordinaria visión de juego y eficiencia ofensiva.", img: "../assets/equipo/superior5.jpg" },
    { id: 7, categoria: "SUPERIOR", nombre: "Jayson Tatum", numero: "#0", posicion: "Alero", edad: "28 años", estatura: "2.03 m", peso: "95 kg", mano: "Derecha", desc: "Nacido en San Luis, Estados Unidos. Destaca por su capacidad anotadora y su versatilidad ofensiva.", img: "../assets/equipo/superior6.jpg" },
    

    { id: 13, categoria: "SUB 19", nombre: "Breanna Stewart", numero: "#30", posicion: "Ala-Pívot", edad: "32 años", estatura: "1.93 m", peso: "77 kg", mano: "Derecha", desc: "Nacida en Nueva York, Estados Unidos. Destaca por su versatilidad y liderazgo.", img: "../assets/equipo/sub19.jpg" },
    { id: 14, categoria: "SUB 19", nombre: "Bam Adebayo", numero: "#13", posicion: "Pívot", edad: "29 años", estatura: "2.06 m", peso: "116 kg", mano: "Derecha", desc: "Nacido en Nueva Jersey, Estados Unidos. Destaca por su defensa, rebotes y juego físico.", img: "../assets/equipo/sub191.jpg" },
    { id: 15, categoria: "SUB 19", nombre: "Donovan Mitchell", numero: "#45", posicion: "Escolta", edad: "30 años", estatura: "1.91 m", peso: "98 kg", mano: "Derecha", desc: "Nacido en Nueva York, Estados Unidos. Conocido por su explosividad y liderazgo ofensivo.", img: "../assets/equipo/sub192.jpg" },
    { id: 16, categoria: "SUB 19", nombre: "Trae Young", numero: "#11", posicion: "Base", edad: "28 años", estatura: "1.85 m", peso: "74 kg", mano: "Derecha", desc: "Nacido en Texas, Estados Unidos. Excelente pasador y especialista en triples.", img: "../assets/equipo/sub193.jpg" },
    { id: 17, categoria: "SUB 19", nombre: "Zion Williamson", numero: "#1", posicion: "Ala-Pívot", edad: "26 años", estatura: "1.98 m", peso: "129 kg", mano: "Izquierda", desc: "Nacido en Carolina del Norte, Estados Unidos. Destaca por su fuerza, explosividad y capacidad para finalizar cerca del aro.", img: "../assets/equipo/sub194.jpg" },
    { id: 18, categoria: "SUB 19",nombre: "Paolo Banchero", numero: "#5", posicion: "Ala-Pívot", edad: "24 años", estatura: "2.08 m", peso: "113 kg", mano: "Derecha", desc: "Nacido en Seattle, Estados Unidos. Jugador fuerte y versátil con gran capacidad ofensiva.",  img: "../assets/equipo/sub195.jpg" },
    { id: 19, categoria: "SUB 19", nombre: "Victor Wembanyama", numero: "#1", posicion: "Pívot", edad: "22 años", estatura: "2.24 m", peso: "95 kg", mano: "Derecha", desc: "Nacido en Francia. Considerado uno de los talentos jóvenes más prometedores gracias a su altura y movilidad.", img: "../assets/equipo/sub196.jpg" },
    { id: 20, categoria: "SUB 19", nombre: "Shai Gilgeous-Alexander", numero: "#2", posicion: "Base", edad: "28 años", estatura: "1.98 m", peso: "90 kg", mano: "Derecha", desc: "Nacido en Toronto, Canadá. Destaca por su elegancia, velocidad y capacidad anotadora.", img: "../assets/equipo/sub197.jpg" },

    { id: 25, categoria: "SUB 18", nombre: "Damian Lillard", numero: "#0", posicion: "Base", edad: "36 años", estatura: "1.88 m", peso: "88 kg", mano: "Derecha", desc: "Nacido en Oakland, Estados Unidos. Especialista en tiros de larga distancia y finales ajustados.", img: "../assets/equipo/superior2.jpg" },
    { id: 26, categoria: "SUB 18", nombre: "Jimmy Butler", numero: "#22", posicion: "Alero", edad: "37 años", estatura: "2.01 m", peso: "104 kg", mano: "Derecha", desc: "Nacido en Houston, Estados Unidos. Destaca por su intensidad defensiva y liderazgo.", img: "../assets/equipo/sub181.jpg" },
    { id: 27, categoria: "SUB 18", nombre: "Kawhi Leonard", numero: "#2", posicion: "Alero", edad: "35 años", estatura: "2.01 m", peso: "102 kg", mano: "Derecha", desc: "Nacido en Los Ángeles, Estados Unidos. Reconocido por ser uno de los mejores defensores de la NBA." , img: "../assets/equipo/sub18.jpg" },
    { id: 28, categoria: "SUB 18", nombre: "Devin Booker", numero: "#1", posicion: "Escolta", edad: "30 años", estatura: "1.98 m", peso: "93 kg", mano: "Derecha", desc: "Nacido en Michigan, Estados Unidos. Excelente tirador con gran capacidad para crear sus propios lanzamientos." , img: "../assets/equipo/sub12.jpg" },
    { id: 29, categoria: "SUB 18", nombre: "DeMar DeRozan", numero: "#10", posicion: "Escolta", edad: "37 años", estatura: "1.98 m", peso: "100 kg", mano: "Derecha", desc: "Nacido en California, Estados Unidos. Destaca por su juego de media distancia, experiencia y liderazgo." , img: "../assets/equipo/sub182.jpg" },
    { id: 30, categoria: "SUB 18", nombre: "Kristaps Porziņģis", numero: "#8", posicion: "Pívot", edad: "31 años", estatura: "2.21 m", peso: "109 kg", mano: "Derecha", desc: "Nacido en Liepāja, Letonia. Reconocido por su altura, capacidad para bloquear tiros y lanzar triples." , img: "../assets/equipo/sub183.jpg" },
    { id: 31, categoria: "SUB 18", nombre: "OG Anunoby", numero: "#8", posicion: "Alero", edad: "29 años", estatura: "2.01 m", peso: "105 kg", mano: "Derecha", desc: "Nacido en Londres, Inglaterra. Excelente defensor con gran fortaleza física y versatilidad." , img: "../assets/equipo/sub184.jpg" },
    { id: 32, categoria: "SUB 18", nombre: "Mikal Bridges", numero: "#25", posicion: "Alero", edad: "30 años", estatura: "1.98 m", peso: "95 kg", mano: "Derecha", desc: "Nacido en Pensilvania, Estados Unidos. Destaca por su defensa, resistencia y lanzamiento exterior." , img: "../assets/equipo/sub193.jpg" },

    { id: 45, categoria: "SUB 17", nombre: "Tyler Herro", numero: "#14", posicion: "Escolta", edad: "26 años", estatura: "1.96 m", peso: "88 kg", mano: "Derecha", desc: "Nacido en Wisconsin, Estados Unidos. Sobresale por su capacidad anotadora y su precisión en el tiro." , img: "../assets/equipo/sub17.jpg" },
    { id: 46, categoria: "SUB 17", nombre: "Julius Randle", numero: "#30", posicion: "Ala-Pívot", edad: "32 años", estatura: "2.03 m", peso: "113 kg", mano: "Izquierda", desc: "Nacido en Texas, Estados Unidos. Jugador fuerte que destaca por su rebote y juego físico." , img: "../assets/equipo/sub171.jpg" },
    { id: 47, categoria: "SUB 17", nombre: "Andrew Wiggins", numero: "#22", posicion: "Alero", edad: "31 años", estatura: "2.01 m", peso: "89 kg", mano: "Derecha", desc: "Nacido en Toronto, Canadá. Reconocido por su atletismo y capacidad defensiva." , img: "../assets/equipo/sub172.jpg" },
    { id: 48, categoria: "SUB 17", nombre: "Bradley Beal", numero: "#3", posicion: "Escolta", edad: "33 años", estatura: "1.93 m", peso: "94 kg", mano: "Derecha", desc: "Nacido en Misuri, Estados Unidos. Excelente anotador y tirador de larga distancia." , img: "../assets/equipo/sub173.jpg" },
    { id: 49, categoria: "SUB 17", nombre: "Aaron Gordon", numero: "#32", posicion: "Ala-Pívot", edad: "31 años", estatura: "2.03 m", peso: "107 kg", mano: "Derecha", desc: "Nacido en California, Estados Unidos. Destaca por su potencia física y capacidad para finalizar cerca del aro." , img: "../assets/equipo/superior6.jpg" },
    { id: 53, categoria: "SUB 17", nombre: "Michael Porter Jr.", numero: "#1", posicion: "Alero", edad: "28 años", estatura: "2.08 m", peso: "99 kg", mano: "Derecha", desc: "Nacido en Misuri, Estados Unidos. Reconocido por su excelente lanzamiento y altura." , img: "../assets/equipo/sub18.jpg" },

    { id: 54, categoria: "SUB 16", nombre: "Darius Garland", numero: "#10", posicion: "Base", edad: "26 años", estatura: "1.85 m", peso: "87 kg", mano: "Derecha", desc: "Nacido en Indiana, Estados Unidos. Destaca por su rapidez, manejo del balón y visión de juego." , img: "../assets/equipo/sub16.jpg" },
    { id: 55, categoria: "SUB 16", nombre: "CJ McCollum", numero: "#3", posicion: "Escolta", edad: "35 años", estatura: "1.91 m", peso: "86 kg", mano: "Derecha", desc: "Nacido en Ohio, Estados Unidos. Excelente tirador y líder dentro y fuera de la cancha." , img: "../assets/equipo/sub161.jpg" },
    { id: 56, categoria: "SUB 16", nombre: "Klay Thompson", numero: "#31", posicion: "Escolta", edad: "36 años", estatura: "1.98 m", peso: "98 kg", mano: "Derecha", desc: "Nacido en California, Estados Unidos. Considerado uno de los mejores tiradores de tres puntos." , img: "../assets/equipo/superior.jpg" },
    { id: 57, categoria: "SUB 16", nombre: "Rudy Gobert", numero: "#27", posicion: "Pívot", edad: "34 años", estatura: "2.16 m", peso: "117 kg", mano: "Derecha", desc: "Nacido en Saint-Quentin, Francia. Especialista en defensa, rebotes y bloqueos." , img: "../assets/equipo/sub162.png" },
    { id: 58, categoria: "SUB 16", nombre: "Jarrett Allen", numero: "#31", posicion: "Pívot", edad: "28 años", estatura: "2.06 m", peso: "110 kg", mano: "Derecha", desc: "Nacido en California, Estados Unidos. Destaca por su capacidad reboteadora y presencia defensiva." , img: "../assets/equipo/sub163.png" },
    { id: 59, categoria: "SUB 16", nombre: "Brook Lopez", numero: "#11", posicion: "Pívot", edad: "38 años", estatura: "2.13 m", peso: "128 kg", mano: "Derecha", desc: "Nacido en California, Estados Unidos. Pívot con gran experiencia y buen lanzamiento exterior." , img: "../assets/equipo/sub165.jpg" },
    { id: 60, categoria: "SUB 16", nombre: "Myles Turner", numero: "#33", posicion: "Pívot", edad: "30 años", estatura: "2.11 m", peso: "113 kg", mano: "Derecha", desc: "Nacido en Texas, Estados Unidos. Reconocido por su habilidad para bloquear tiros y abrir la cancha." , img: "../assets/equipo/sub166.jpg" },


    { id: 61, categoria: "SUB 15", nombre: "Austin Reaves", numero: "#15", posicion: "Escolta", edad: "28 años", estatura: "1.96 m", peso: "89 kg", mano: "Derecha", desc: "Nacido en Arkansas, Estados Unidos. Destaca por su inteligencia de juego y capacidad anotadora." , img: "../assets/equipo/sub151.jpg" },
    { id: 62, categoria: "SUB 15", nombre: "Anfernee Simons", numero: "#1", posicion: "Base", edad: "27 años", estatura: "1.91 m", peso: "82 kg", mano: "Derecha", desc: "Nacido en Florida, Estados Unidos. Base rápido con excelente lanzamiento de tres puntos." , img: "../assets/equipo/sub152.jpg" },
    { id: 63, categoria: "SUB 15", nombre: "Zach LaVine", numero: "#8", posicion: "Escolta", edad: "31 años", estatura: "1.96 m", peso: "91 kg", mano: "Derecha", desc: "Nacido en Washington, Estados Unidos. Reconocido por su explosividad, clavadas espectaculares y gran capacidad ofensiva." , img: "../assets/equipo/sub153.jpg" },
    { id: 64, categoria: "SUB 15", nombre: "James Harden", numero: "#1", posicion: "Escolta", edad: "37 años", estatura: "1.96 m", peso: "100 kg", mano: "Izquierda", desc: "Nacido en California, Estados Unidos. Destaca por su capacidad para anotar, asistir y generar jugadas ofensivas." , img: "../assets/equipo/sub12.jpg" },
    { id: 65, categoria: "SUB 15", nombre: "Jalen Brunson", numero: "#11", posicion: "Base", edad: "30 años", estatura: "1.88 m", peso: "86 kg", mano: "Derecha", desc: "Nacido en Nueva Jersey, Estados Unidos. Reconocido por su liderazgo, inteligencia y efectividad en momentos decisivos." , img: "../assets/equipo/sub154.jpg" },
    { id: 66, categoria: "SUB 15", nombre: "Al Horford", numero: "#42", posicion: "Pívot", edad: "40 años", estatura: "2.06 m", peso: "109 kg", mano: "Derecha", desc: "Nacido en Puerto Plata, República Dominicana. Veterano con gran experiencia, sólido defensor y buen lanzador exterior." , img: "../assets/equipo/sub155.jpg" },

];

const staff = [
    { id: 101, categoria: "SUPERIOR", nombre: "Steve Kerr",cargo: "Entrenador Principal",edad: "61 años",nacionalidad: "Estados Unidos",experiencia: "11 temporadas",desc: "Entrenador estadounidense reconocido por su liderazgo y por dirigir equipos campeones. Destaca por su enfoque ofensivo, trabajo en equipo y desarrollo de jugadores.", img: "../assets/equipo/entrenadorSuperior.jpg" },
    { id: 102, categoria: "SUPERIOR", nombre: "Gregg Popovich", cargo: "Entrenador Principal", edad: "77 años", nacionalidad: "Estados Unidos", experiencia: "Más de 25 temporadas", desc: "Considerado uno de los mejores entrenadores de la historia del baloncesto. Destaca por su disciplina, estrategia y formación de jugadores." , img: "../assets/equipo/superiorSuperior.jpg" },
    { id: 103, categoria: "SUB 19", nombre: "Erik Spoelstra", cargo: "Entrenador Principal", edad: "56 años", nacionalidad: "Estados Unidos", experiencia: "17 temporadas", desc: "Reconocido por su excelente capacidad táctica y adaptación durante los partidos. Ha dirigido equipos campeones de la NBA." , img: "../assets/equipo/superiorentre.jpg" },
    { id: 104, categoria: "SUB 19", nombre: "Tyronn Lue", cargo: "Entrenador Principal", edad: "49 años", nacionalidad: "Estados Unidos", experiencia: "9 temporadas", desc: "Destaca por su liderazgo, manejo del grupo y capacidad para realizar ajustes tácticos en partidos importantes." , img: "../assets/equipo/superiorentre2.jpg" },
    { id: 105, categoria: "SUB 18", nombre: "Michael Malone", cargo: "Entrenador Principal", edad: "55 años", nacionalidad: "Estados Unidos", experiencia: "12 temporadas", desc: "Entrenador reconocido por construir equipos sólidos tanto en defensa como en ataque y potenciar el desarrollo de jóvenes talentos." , img: "../assets/equipo/superiorentre3.jpg" },
    { id: 106, categoria: "SUB 18", nombre: "Joe Mazzulla", cargo: "Entrenador Principal", edad: "38 años", nacionalidad: "Estados Unidos", experiencia: "3 temporadas", desc: "Uno de los entrenadores más jóvenes de la NBA. Destaca por su enfoque moderno, intensidad defensiva y liderazgo." , img: "../assets/equipo/superiorentre5.jpg" },
    { id: 107, categoria: "SUB 17", nombre: "Mark Daigneault", cargo: "Entrenador Principal", edad: "41 años", nacionalidad: "Estados Unidos", experiencia: "5 temporadas", desc: "Reconocido por desarrollar jugadores jóvenes y construir equipos competitivos con un estilo dinámico." , img: "../assets/equipo/entrenador-noruega.jfif" },
    { id: 108, categoria: "SUB 17", nombre: "Rick Carlisle", cargo: "Entrenador Principal", edad: "67 años", nacionalidad: "Estados Unidos", experiencia: "Más de 20 temporadas", desc: "Entrenador con amplia experiencia y reconocido por su inteligencia táctica y excelente lectura de los partidos." , img: "../assets/equipo/superiorentre6.jpg" },
    { id: 109, categoria: "SUB 16", nombre: "Doc Rivers", cargo: "Entrenador Principal", edad: "65 años", nacionalidad: "Estados Unidos", experiencia: "Más de 25 temporadas", desc: "Conocido por su liderazgo, experiencia y capacidad para gestionar plantillas con jugadores de alto nivel." , img: "../assets/equipo/superiorentre7.jpg" },
    { id: 110, categoria: "SUB 16", nombre: "Nick Nurse", cargo: "Entrenador Principal", edad: "59 años", nacionalidad: "Canadá", experiencia: "7 temporadas", desc: "Especialista en planteamientos defensivos innovadores y en realizar ajustes estratégicos durante los encuentros." , img: "../assets/equipo/superior157.jpg" },
    { id: 111, categoria: "SUB 15", nombre: "Jordi Fernández", cargo: "Entrenador Principal", edad: "43 años", nacionalidad: "España", experiencia: "Más de 15 años", desc: "Entrenador español con experiencia internacional. Destaca por el desarrollo de jóvenes jugadores y un estilo de juego moderno." , img: "../assets/equipo/superiorSuperior.jpg" },
    { id: 112, categoria: "SUB 15", nombre: "Darko Rajaković", cargo: "Entrenador Principal", edad: "47 años", nacionalidad: "Serbia", experiencia: "Más de 20 años", desc: "Entrenador serbio reconocido por su trabajo en formación de jugadores, disciplina táctica y enfoque colectivo." , img: "../assets/equipo/superiorentre3.jpg" },
];

let categoriaActiva = "SUPERIOR";

function renderJugadores() {
    const grid = document.getElementById('playersGrid');
    const filtrados = jugadores.filter(j => j.categoria === categoriaActiva);

    grid.innerHTML = filtrados.map(j => `
    <article class="container1" data-categoria="${j.categoria}">
        <div class="container-grid">
            <div class="playercard" onclick="abrirModal(${j.id})">
                <img src="${j.img}" alt="${j.nombre}" onerror="this.src='../assets/equipo/imgJugadorMC.png'">
            </div>
            <div class="click" onclick="abrirModal(${j.id})">
                <span>${j.nombre}</span>
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
                <div class="playercard" onclick="abrirModalStaff(${s.id})">
                    <img src="${s.img}" alt="${s.nombre}" onerror="this.src='../assets/equipo/imgJugadorMC.png'">
                </div>
                <div class="click" onclick="abrirModalStaff(${s.id})">
                    <span>${s.nombre}</span>
                </div>
            </div>
        </article>
    `).join('');
}

function abrirModal(id) {
    const jugador = jugadores.find(j => j.id === id);
    if (!jugador) return;

    document.body.classList.add('modal-activo');

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

    document.body.classList.add('modal-activo');

    if (window.innerWidth >= 780) {
        document.getElementById("jugadorDesktopImagen").src = miembro.img;
        document.getElementById("jugadorDesktopImagen").onerror = function() { this.src = '../assets/equipo/imgJugadorMC.png'; };
        document.getElementById("jugadorDesktopNombre").textContent = miembro.nombre;
        document.getElementById("jugadorDesktopNumero").textContent = miembro.cargo;
        document.getElementById("jugadorDesktopPosicion").textContent = miembro.experiencia;
        document.getElementById("jugadorDesktopCategoria").textContent = miembro.nacionalidad;
        document.getElementById("jugadorDesktopEdad").textContent = miembro.edad;
        document.getElementById("jugadorDesktopEstatura").textContent = "-";
        document.getElementById("jugadorDesktopPeso").textContent = "-";
        document.getElementById("jugadorDesktopMano").textContent = "-";
        document.getElementById("jugadorDesktopDescripcion").textContent = miembro.desc;
        document.getElementById("modalJugadorDesktop").style.display = "flex";
    } else {
        document.getElementById('modal-img').src = miembro.img;
        document.getElementById('modal-img').onerror = function() { this.src = '../assets/equipo/imgJugadorMC.png'; };
        document.getElementById("modal-nombre").textContent = miembro.nombre;
        document.getElementById("modal-numero").textContent = miembro.cargo;
        document.getElementById("modal-posicion").textContent = miembro.experiencia;
        document.getElementById("modal-categoria").textContent = miembro.nacionalidad;
        document.getElementById("modal-edad").textContent = miembro.edad;
        document.getElementById("modal-estatura").textContent = "-";
        document.getElementById("modal-peso").textContent = "-";
        document.getElementById("modal-mano").textContent = "-";
        document.getElementById("modal-desc").textContent = miembro.desc;
        document.getElementById('modal').classList.add('activo');
    }
}


function cerrarModal() {
    document.body.classList.remove('modal-activo');
    document.getElementById('modal').classList.remove('activo');
}

function cerrarModalDesktop() {
    document.body.classList.remove('modal-activo');
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