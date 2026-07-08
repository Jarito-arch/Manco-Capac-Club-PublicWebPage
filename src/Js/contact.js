const radios = document.querySelectorAll("input[name='contacto']");

radios.forEach(radio => {

    radio.addEventListener("change", () => {

        console.log("Seleccionó:", radio.value);

    });

});


const formulario = document.getElementById("ContentForm");

const modal = document.getElementById("modal");

const loader = document.getElementById("loader");

const success = document.getElementById("success");


formulario.addEventListener("submit", function(e){
    e.preventDefault();
    modal.classList.add("show");
    loader.style.display="block";
    success.style.display="none";

    setTimeout(()=>{
        loader.style.display="none";
        success.style.display="block";
    },1000);

    setTimeout(()=>{
        modal.classList.remove("show");
        formulario.reset();
        localStorage.removeItem("contacto");
    },2500);
});

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
