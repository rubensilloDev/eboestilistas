/* MENU RESPONSIVE */

const btnHamburguesa = document.querySelector('.nav-toggle');
const contenedorMenu = document.querySelector('.nav-overlay');
const navMenu = document.querySelector('.nav-menu');
const enlacesMenu = document.querySelectorAll('.nav-link');

btnHamburguesa.addEventListener('click', () => {
    btnHamburguesa.classList.toggle('active');
    contenedorMenu.classList.toggle('active');
    if (contenedorMenu.classList.contains('active')) {
        navMenu.classList.add('active')
    } else {
        navMenu.classList.remove('active')
    }
});


// para que cuando se toque en un enlace del menu se cierre el menu del movil

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        btnHamburguesa.classList.remove('active')
        contenedorMenu.classList.remove('active')
        navMenu.classList.remove('active')
    })
})