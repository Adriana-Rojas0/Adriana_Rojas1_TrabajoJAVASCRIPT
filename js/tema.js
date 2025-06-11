/************************************* Temas Claro - Oscuro ***************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const temaActual = localStorage.getItem('theme') || 'light';
    const botonTema = document.getElementById('cambiar-tema')
    const iconoLight = document.getElementById('icono-light')
    const iconoDark = document.getElementById('icono-dark')

    const actualizarIconos = (tema) => {
        if(tema === 'dark'){
            iconoLight.style.display = 'inline'
            iconoDark.style.display = 'none'
        }else{
            iconoLight.style.display = 'none'
            iconoDark.style.display = 'inline'
        }
    }

    document.body.classList.add(temaActual + '-theme')
    actualizarIconos(temaActual)

    botonTema.addEventListener('click', () => {
        document.body.classList.toggle('light-theme')
        document.body.classList.toggle('dark-theme')

        const nuevoTema = document.body.classList.contains('dark-theme')?
        'dark' : 'light'
        localStorage.setItem('theme', nuevoTema)
        actualizarIconos(nuevoTema)
    })
})