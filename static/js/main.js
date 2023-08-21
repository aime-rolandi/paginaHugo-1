
//le damos funcionamiento al boton del menu desplegable responsivo
document.querySelector("button.button-menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
});