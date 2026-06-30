window.addEventListener("load", () => {
  if (window.location.hash) {
    const seccion = document.querySelector(window.location.hash);
    if (seccion) {
      setTimeout(() => {
        seccion.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  }
});
