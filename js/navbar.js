const navbarLinks = document.getElementById('links-navbar');

const url = window.location.pathname;

// Detectar la profundidad del archivo actual para ajustar las rutas
const basePath = url.includes('/views/') ? '../' : './';

fetch(`${basePath}assets/data/datos.json`)
     .then(response => {
        if (!response.ok) {
            throw new Error(`Error al cargar JSON: ${response.statusText}`);
        }
        return response.json();
    })
     .then(data => {
          console.log(data);
          data.navItems.forEach(link => {

           // Ajustar la URL eliminando posibles barras redundantes
           const adjustedUrl = `${basePath}${link.url}`.replace(/\/{2,}/g, '/');

            const clase = url.includes(link.url)?'botonin': '';
          
            navbarLinks.innerHTML += `
                <a class="${clase}" href="${adjustedUrl}">${link.title}</a>
            `;
     });
})

.catch(error => {
    console.error("Error al cargar los datos.",error);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});