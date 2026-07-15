const camposDinamicos = document.querySelectorAll(".extra-fields");
const selectMotivo = document.getElementById("cars");

function mostrarCamposSegunMotivo() {
    const motivoSeleccionado = selectMotivo.value;
    const mensajeField = document.getElementById("mensajeField");

    if (motivoSeleccionado === "consulta" || motivoSeleccionado === "sugerencia") {
        mensajeField.classList.add("visible");
    } else {
        mensajeField.classList.remove("visible");
        document.getElementById("message").value = "";
    }

    camposDinamicos.forEach(bloque => {
        const camposDelBloque = bloque.querySelectorAll("input, select");

        if (bloque.dataset.motivo === motivoSeleccionado) {
            bloque.classList.add("visible");
            camposDelBloque.forEach(campo => campo.setAttribute("required", ""));
        } else {
            bloque.classList.remove("visible");
            camposDelBloque.forEach(campo => {
                campo.removeAttribute("required");
                campo.value = "";
            });
        }
    });
}

selectMotivo.addEventListener("change", mostrarCamposSegunMotivo);
const campoEdad = document.getElementById("edad");
const errorEdad = document.getElementById("errorEdad");

campoEdad.addEventListener("input", () => {
    const valor = parseInt(campoEdad.value);

    if (campoEdad.value === "") {
        errorEdad.classList.remove("visible");
        return;
    }

    if (valor < 14) {
        errorEdad.textContent = "La edad debe ser superior a 14 años.";
        errorEdad.classList.add("visible");
    } else if (valor > 45) {
        errorEdad.textContent = "La edad no puede ser mayor a 45 años.";
        errorEdad.classList.add("visible");
    } else {
        errorEdad.classList.remove("visible");
    }
});

const radios = document.querySelectorAll("input[name='contacto']");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        console.log("Seleccionó:", radio.value);
    });
});

const formulario = document.getElementById("ContentForm");
const modal = document.getElementById("modal-form");
const loader = document.getElementById("loader");
const success = document.getElementById("success");
const btnCancelar = document.getElementById("btnCancelar");

window.addEventListener("DOMContentLoaded", () => {
    const datos = JSON.parse(localStorage.getItem("contacto"));
    if (!datos) return;
    document.getElementById("name").value = datos.nombre || "";
    document.getElementById("email").value = datos.correo || "";
    document.getElementById("number").value = datos.telefono || "";
    document.getElementById("cars").value = datos.motivo || "";
    document.getElementById("message").value = datos.mensaje || "";
    document.getElementById("conociste").value = datos.conociste || "";
    if (datos.contacto) {
        const radio = document.querySelector(
            `input[name="contacto"][value="${datos.contacto}"]`
        );
        if (radio) radio.checked = true;
    }
    document.getElementById("privacy").checked = datos.privacidad || false;
    mostrarCamposSegunMotivo();
});

function guardarFormulario() {
    const datos = {
        nombre: document.getElementById("name").value,
        correo: document.getElementById("email").value,
        telefono: document.getElementById("number").value,
        motivo: document.getElementById("cars").value,
        mensaje: document.getElementById("message").value,
        conociste: document.getElementById("conociste").value,
        contacto: document.querySelector('input[name="contacto"]:checked')?.value,
        privacidad: document.getElementById("privacy").checked
    };
    localStorage.setItem("contacto", JSON.stringify(datos));
}

formulario.addEventListener("input", guardarFormulario);
formulario.addEventListener("change", guardarFormulario);

btnCancelar.addEventListener("click", function () {
    formulario.reset();
    localStorage.removeItem("contacto");
});

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.classList.add("show");
    loader.style.display = "block";
    success.style.display = "none";

    setTimeout(() => {
        loader.style.display = "none";
        success.style.display = "block";
    }, 1000);

    setTimeout(() => {
        modal.classList.remove("show");
        formulario.reset();
        localStorage.removeItem("contacto");
    }, 2500);
});