function abrirModal(img, nombre, info, desc) {
    if(window.innerWidth >= 769){
        document.getElementById("jugadorDesktopImagen").src = img;
        document.getElementById("jugadorDesktopNombre").textContent = nombre;
        let datos = info.split("·");
        document.getElementById("jugadorDesktopNumero").textContent = datos[0] || "#00";
        document.getElementById("jugadorDesktopPosicion").textContent = datos[1] || "POSICIÓN";
        document.getElementById("modalJugadorDesktop").style.display="flex";
    }else{
        document.getElementById('modal-img').src = img;
        document.getElementById('modal-nombre').textContent = nombre;
        document.getElementById('modal-info').textContent = info;
        document.getElementById('modal-desc').textContent = desc;
        document.getElementById('modal').classList.add('activo');
    }

}


function cerrarModal(){
    document.getElementById('modal').classList.remove('activo');
}

function cerrarModalDesktop(){
    document.getElementById("modalJugadorDesktop").style.display="none";
}

document.getElementById('modal').addEventListener('click',function(e){
    if(e.target===this){
        cerrarModal();
    }
});

document
.querySelector(".cerrar-modal-desktop")
.addEventListener("click",cerrarModalDesktop);
