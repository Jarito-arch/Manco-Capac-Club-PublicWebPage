const boton = document.getElementById("hamburger-menu");
const menu = document.querySelector(".navPrincipal");

boton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

