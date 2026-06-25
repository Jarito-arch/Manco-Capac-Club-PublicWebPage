
    function abrirModal(img, nombre, info, desc) {
        document.getElementById('modal-img').src = img;
        document.getElementById('modal-nombre').textContent = nombre;
        document.getElementById('modal-info').textContent = info;
        document.getElementById('modal-desc').textContent = desc;
        document.getElementById('modal').classList.add('activo');
    }

    function cerrarModal() {
        document.getElementById('modal').classList.remove('activo');
    }

    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) cerrarModal();
    });
