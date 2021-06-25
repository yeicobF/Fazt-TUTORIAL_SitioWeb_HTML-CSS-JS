// Funcion para cuando se de click al botón del menú.
document.querySelector(".menu-btn").addEventListener("click", () => {
  // Hacer un toggle con la clase "show", para mostrar u ocultar el menú.
  document.querySelector(".nav-menu").classList.toggle("show");
});
