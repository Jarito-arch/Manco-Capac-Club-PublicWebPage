
const noticias = [
    {
        id: 1,
        titulo: "El Club Deportivo Manco Cápac recuerda el legado de José Augusto Fernández 'Taka Taka'",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-1.png",
        contenido: `
            <p>El Club Deportivo Manco Cápac rindió homenaje a uno de sus personajes más emblemáticos: José Augusto Fernández Carlos, conocido cariñosamente como <strong>"Taka Taka"</strong>.</p>

            <p>Nacido el 27 de noviembre de 1934, Fernández dedicó gran parte de su vida al club, donde desempeñó diferentes funciones como jugador, entrenador y presidente. Antes de vestir la camiseta del Manco Cápac, inició su trayectoria deportiva en el Club Deportivo Municipal.</p>

            <p>Además de su talento en el básquet, fue reconocido por su disciplina y por sus aficiones a la pintura, la pesca y el canto. Su legado continúa siendo recordado por la familia del club y por quienes compartieron con él importantes momentos deportivos.</p>
            
        `
    },

    {
        id: 2,
        titulo: "Doña Dominga Carlos, una madre que apoyó al Manco Cápac dentro y fuera de la cancha",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-2.png",
        contenido: `
            <p>La historia del Club Deportivo Manco Cápac también reconoce a quienes, sin jugar en la cancha, contribuyeron al crecimiento del equipo.</p>

            <p>Doña Dominga Carlos Llaguento, madre de José Augusto Fernández "Taka Taka", fue una de las personas más queridas por jugadores e hinchas.</p>

            <p>Con mucho cariño se encargaba de lavar los uniformes del equipo después de cada partido y de preparar lonches para los jugadores.</p>

            <p>Su permanente apoyo convirtió a Doña Dominga en una figura muy apreciada por el barrio, siendo recordada con nostalgia por quienes compartieron aquella época del club.</p>
        `
    },

    {
        id: 3,
        titulo: "Rosa Tello de Rivero también dejó huella en la historia del Manco Cápac",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-3.png",
        contenido: `
            <p>Otra de las personas recordadas por el Club Deportivo Manco Cápac es Rosa Tello de Rivero, madre de Víctor e Ismael Rivero.</p>

            <p>Su apoyo al equipo era constante. Cuando el club conseguía una victoria, premiaba a los jugadores con sándwiches de pavo y café.</p>

            <p>En cambio, cuando los resultados no eran favorables, expresaba su molestia desde la ventana de su casa.</p>

            <p>Su compromiso con el equipo refleja el fuerte vínculo entre el club y los vecinos del barrio.</p>
        `
    },

    {
        id: 4,
        titulo: "El 'Trío de Oro' marcó una época en el básquet chiclayano",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-4.png",
        contenido: `
            <p>El Club Deportivo Manco Cápac destacó la trayectoria de tres de sus más importantes jugadores, conocidos como <strong>"El Trío de Oro"</strong>.</p>

            <p>El grupo estuvo conformado por Félix Mendoza Bazán, Alberto Ramírez Delgado (Capringa) y Luis F. Sirlopú Huamán.</p>

            <p>Los tres sobresalieron por su talento deportivo y su aporte al crecimiento del básquet en Chiclayo.</p>

            <p>Su legado continúa inspirando a las nuevas generaciones de deportistas.</p>
        `
    },

    {
        id: 5,
        titulo: "Félix Mendoza Bazán fue uno de los grandes referentes del Manco Cápac",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-5.png",
        contenido: `
            <p>Félix Mendoza Bazán inició su historia con el Club Deportivo Manco Cápac en 1962.</p>

            <p>Reconocido como <strong>"El Maestro"</strong>, destacó por su técnica, liderazgo y disciplina dentro del campo de juego.</p>

            <p>También integró la Selección de Chiclayo durante varios años.</p>

            <p>Después de retirarse como jugador regresó al club como director técnico para compartir su experiencia con las nuevas generaciones.</p>
        `
    },

    {
        id: 6,
        titulo: "Alberto Ramírez 'Capringa' impulsó el desarrollo del básquet desde las canchas y la enseñanza",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-6.png",
        contenido: `
            <p>Alberto Ramírez Delgado, conocido como <strong>"Capringa"</strong>, fue uno de los jugadores más destacados surgidos de las canteras del Club Deportivo Manco Cápac.</p>

            <p>Representó a la Selección Chiclayana en competencias regionales y nacionales.</p>

            <p>Estudió Educación Física en el INEF y posteriormente asumió funciones como entrenador.</p>

            <p>También presidió la Asociación Departamental de Entrenadores de Baloncesto de Lambayeque, promoviendo la capacitación de entrenadores y jóvenes talentos.</p>
        `
    },

    {
        id: 7,
        titulo: "Luis Sirlopú Huamán promovió el básquet desde la educación",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-7.png",
        contenido: `
            <p>Luis F. Sirlopú Huamán inició su carrera deportiva en el Club Deportivo Manco Cápac en 1962.</p>

            <p>Tras culminar sus estudios en la Universidad Nacional Pedro Ruiz Gallo se convirtió en profesor de Educación Física y entrenador de básquet.</p>

            <p>Su filosofía de enseñanza quedó reflejada en la frase <strong>"El aprender para enseñar"</strong>.</p>

            <p>Su trabajo contribuyó a formar nuevas generaciones de deportistas.</p>
        `
    },

    {
        id: 8,
        titulo: "Canción recuerda una difícil etapa del Club Manco Cápac",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-8.png",
        contenido: `
            <p>Una composición titulada <strong>"Cuando se perdió la categoría Año 1969"</strong> recuerda uno de los momentos más complicados del Club Deportivo Manco Cápac.</p>

            <p>La canción relata las dificultades deportivas que atravesó el equipo durante aquella temporada.</p>

            <p>Además menciona a varios de sus integrantes como Tito Ramírez (Capringa), Fernando Seminario (Mellizo) y Jorge Sánchez (Yaguar).</p>

            <p>El texto refleja el sentimiento de tristeza vivido por jugadores e hinchas.</p>
        `
    },

    {
        id: 9,
        titulo: "Fotografías conservan la memoria del Club Deportivo Manco Cápac",
        fecha: "26 de junio de 2026",
        imagen: "../assets/equipo/imgCollageFotosMC.jpeg",
        contenido: `
            <p>Una colección de fotografías antiguas muestra diferentes momentos de la historia del Club Deportivo Manco Cápac.</p>

            <p>Entre las imágenes aparecen celebraciones de campeonatos, reuniones entre dirigentes, entrenamientos y actividades sociales.</p>

            <p>Las fotografías permiten conocer parte de la evolución del club.</p>

            <p>También ayudan a recordar a quienes contribuyeron a su crecimiento a lo largo de los años.</p>
        `
    },

    {
        id: 10,
        titulo: "El Manco Cápac celebra décadas de campeonatos",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-10.png",
        contenido: `
            <p>El Club Deportivo Manco Cápac destacó algunos de los principales títulos obtenidos a lo largo de su historia.</p>

            <ul>
                <li> Campeón Torneo Sergio Lecaros (1978).</li>
                <li> Campeón Máster (1999).</li>
                <li>Tricampeón de Básquet (1999, 2000 y 2001).</li>
                <li> Campeón Juvenil (2015).</li>
                <li> Campeón Superior (2019).</li>
            </ul>

            <p>Estos logros reflejan la continuidad deportiva del club durante varias generaciones.</p>
        `
    },

    {
        id: 11,
        titulo: "Del barrio a la historia: el Manco Cápac mantiene vivo su legado",
        fecha: "26 de junio de 2026",
        imagen: "../assets/news/News-11.png",
        contenido: `
            <p>Las biografías, fotografías y campeonatos recopilados por el Club Deportivo Manco Cápac muestran la importancia de la institución en la historia deportiva del barrio.</p>

            <p>Jugadores, entrenadores, dirigentes, madres de familia e hinchas aparecen como protagonistas de un legado construido durante décadas.</p>

            <p>Gracias a su esfuerzo y compromiso, el espíritu deportivo del Club Deportivo Manco Cápac continúa vivo y sigue siendo motivo de orgullo para toda la comunidad.</p>
        `
    },

   {
    id: 12,
    titulo: "Reunión de campeones: El reencuentro de las leyendas",
    fecha: "26 de junio de 2026",
    imagen: "../assets/news/News-12.png",
    contenido: `
        <p>En una jornada llena de nostalgia y alegría, los exintegrantes de distintas épocas se reunieron para compartir anécdotas y revisar el archivo histórico del club.</p>
        <p>El encuentro sirvió para que las antiguas glorias del equipo rememoraran las jugadas que los llevaron a la gloria en las décadas de los 70 y 80, fortaleciendo los lazos de amistad que el deporte formó hace años.</p>
        <p>La reunión culminó con el compromiso de seguir apoyando a las categorías inferiores para que el nombre del Manco Cápac siga brillando.</p>
    `
},
{
    id: 13,
    titulo: "Mujeres de corazón: El pilar silencioso detrás del éxito",
    fecha: "26 de junio de 2026",
    imagen: "../assets/news/News-13.png",
    contenido: `
        <p>El club rinde homenaje a las madres y mujeres del barrio que fueron el motor invisible de la institución. Desde la organización de colectas para uniformes hasta la atención constante en los días de partido.</p>
        <p>Estas mujeres, siguiendo el ejemplo de figuras como Doña Dominga, han demostrado que el club es una gran familia. Su labor de apoyo logístico y moral ha sido, en muchas ocasiones, el factor decisivo para mantener al equipo unido en momentos difíciles.</p>
        <p>Hoy, las nuevas generaciones reconocen este esfuerzo como parte fundamental de su identidad.</p>
    `
},
{
    id: 14,
    titulo: "La nueva guardia: Los jóvenes que abrazan la tradición",
    fecha: "26 de junio de 2026",
    imagen: "../assets/news/News-14.png",
    contenido: `
        <p>El Manco Cápac sigue renovándose. La actual plantilla de jugadores ha mostrado un compromiso excepcional, entendiendo que no solo representan un color, sino una historia de décadas.</p>
        <p>Bajo la guía de los entrenadores veteranos, los jóvenes talentos están trabajando duro para honrar el legado del "Trío de Oro" y alcanzar nuevos títulos.</p>
        <p>La conexión entre la experiencia de los mayores y la energía de los jóvenes es la garantía de que el club tiene futuro para rato.</p>
    `
},
{
    id: 15,
    titulo: "Formando valores: La escuela de básquet del Manco Cápac",
    fecha: "26 de junio de 2026",
    imagen: "../assets/news/News-15.png",
    contenido: `
        <p>La enseñanza del básquet en el barrio ha pasado de generación en generación. Siguiendo la filosofía del "aprender para enseñar", el club mantiene activas sus clínicas deportivas para niños.</p>
        <p>El objetivo no es solo formar atletas, sino buenos ciudadanos con disciplina, respeto y trabajo en equipo. La cancha del barrio sigue siendo el centro donde se forja el carácter de los futuros campeones.</p>
        <p>El Manco Cápac se consolida así como una escuela de vida para toda la comunidad.</p>
    `
}
];
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");

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


//sirve para generar noticas de forma dinamica 
const container = document.getElementById("container");
const btnMasNoticias = document.getElementById("btnMasNoticias");

const idsExtra = [10, 11, 12, 13, 14, 15];
let extrasVisibles = false;

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

function mostrarMasNoticias() {
    idsExtra.forEach(id => {
        const noticia = noticias.find(n => n.id === id);
        if (noticia) {
            container.appendChild(crearTarjeta(noticia));
        }
    });

    extrasVisibles = true;
    btnMasNoticias.textContent = "VER MENOS NOTICIAS";
}

function ocultarMasNoticias() {
    document.querySelectorAll(".news-card.extra").forEach(card => card.remove());

    extrasVisibles = false;
    btnMasNoticias.textContent = "VER MÁS NOTICIAS";
}

btnMasNoticias.addEventListener("click", function () {
    if (extrasVisibles) {
        ocultarMasNoticias();
    } else {
        mostrarMasNoticias();
    }
});