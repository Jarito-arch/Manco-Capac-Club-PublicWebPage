function abrirModal(img, nombre, info, desc) {
    if(window.innerWidth >= 780){
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

document.getElementById("modalJugadorDesktop").addEventListener("click", function(e){
    if(e.target === this){
        cerrarModalDesktop();
    }
});

document.querySelector(".cerrar-modal-desktop").addEventListener("click",cerrarModalDesktop);
const botonesCategoria = document.querySelectorAll(".category-button");
const tarjetas = document.querySelectorAll(".container1");



botonesCategoria.forEach(boton => {
    boton.addEventListener("click", function(e){
        e.preventDefault();
        const categoria = this.dataset.filtro;
        tarjetas.forEach(tarjeta=>{
            if(tarjeta.dataset.categoria === categoria){
                tarjeta.style.display="";
            }else{
                tarjeta.style.display="none";
            }
        });
    });
});
