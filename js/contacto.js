//---------------------------------------------- Mapa -------------------------------------------------------------

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0 // Corregido el nombre de la propiedad
};

if (document.getElementById('map')) { // Solo ejecuta si existe el elemento map
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            success,
            error,
            options
        );
    } else {
        alert("Los servicios de geolocalización no están disponibles");
    }
}

function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 14
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mi OpenStreetMap'
    }).addTo(map);

    // Definir Iconos
    let inicio = L.icon({
        iconUrl: '../../assets/images/ico-ubi-azul.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    });

    let final = L.icon({
        iconUrl: '/assets/images/ico-ubi-rojo.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    });

    let track = L.icon({
        iconUrl: '/assets/images/ico-ubi-verde.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    });

    // Calcular Ruta
    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(41.651077, -0.881242)
        ],
        language: 'es',
        createMarker: function (i, wp, nWps) {
            switch (i) {
                case 0:
                    return L.marker(wp.latLng, { icon: inicio, draggable: true }).bindPopup("Ubicación inicial");
                case nWps - 1:
                    return L.marker(wp.latLng, { icon: final, draggable: true }).bindPopup("Diseñamos Web, C. de Miguel, 2, Casco Antiguo, 50001 Zaragoza");
                default:
                    return L.marker(wp.latLng, { icon: track, draggable: true }).bindPopup("Parada en camino");
            }
        }
    }).addTo(map);
}

function error() {
    let map = L.map('map', {
        center: [41.651077, -0.881242],
        zoom: 14
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mi OpenStreetMap'
    }).addTo(map);
}