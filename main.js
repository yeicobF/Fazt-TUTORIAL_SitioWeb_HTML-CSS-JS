// Funcion para cuando se de click al botón del menú.
document.querySelector(".menu-btn").addEventListener("click", () => {
  // Hacer un toggle con la clase "show", para mostrar u ocultar el menú.
  document.querySelector(".nav-menu").classList.toggle("show");
  // document.getElementById("nav-bar").style.visibility = "visible";
});

/* ------------------------------ ScrollReveal ------------------------------ */

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
