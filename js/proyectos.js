/***************************************** Galería de Imagenes ***************************************************/

const proyectoContainer = document.getElementById('grid-2')

fetch("../assets/data/datos.json")
     .then(response => response.json())
     .then(data => {
        data.proyectos.map((item) => {
            proyectoContainer.innerHTML +=
            `
            <div class="proyectos-container" style="background-image: url(${item.imagen});">
                <div class="descripcion">
                    <h3>${item.nombre}</h3>
                    <P>${item.descripcion}</P>
                    <small>${item.tecnologias}</small>
                </div>
            </div>
            `
        })
     })

