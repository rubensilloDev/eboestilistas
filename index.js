/* MENU RESPONSIVE */

const btnHamburguesa = document.querySelector('.nav-toggle');
const contenedorMenu = document.querySelector('.nav-overlay');
const navMenu = document.querySelector('.nav-menu');
const enlacesMenu = document.querySelectorAll('.nav-link');

// Función única para cerrar el menú
const cerrarMenu = () => {
    btnHamburguesa.classList.remove('active');
    contenedorMenu.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = ''; // Rehabilitar scroll si se había bloqueado
};

btnHamburguesa.addEventListener('click', (e) => {
    e.stopPropagation();
    btnHamburguesa.classList.toggle('active');
    contenedorMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Bloquear scroll cuando el menú está abierto
    if (contenedorMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Cerrar al hacer clic en un link
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', cerrarMenu);
});

// Cerrar al hacer clic fuera del contenido (en el overlay)
contenedorMenu.addEventListener('click', (e) => {
    if (e.target === contenedorMenu) {
        cerrarMenu();
    }
});