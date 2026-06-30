const boton = document.getElementById("hamburger-menu");
const menu = document.querySelector(".navPrincipal");

boton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    let scrollMaximo = 500;
    let umbral = 600;
    document.querySelectorAll('.item-historia').forEach(
        img => {
            positionY = img.getBoundingClientRect().y;
            opacity = positionY < scrollMaximo ? 1 : positionY < umbral ? 1 - ((positionY - scrollMaximo) / 100) : 0.2;
            opacity = Math.max(0.2, Math.min(1, opacity));
            img.style.opacity = opacity;
            //console.log(positionY);
        }
    );
});