var centerPos = [47.2401, 39.71067];
var dormPos = [47.23947, 39.71274];
var cafePos = [47.2403, 39.71281];
var stopPos = [47.23872, 39.71325];

var map = L.map('mapid').setView(centerPos, 17);
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; 2013 OpenStreetMap contributors',
}).addTo(map);

L.control.mousePosition().addTo(map);
L.Control.measureControl().addTo(map);



// Icons
var parkIcon = L.icon({
    iconUrl: 'img/park.png',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22]
});

var dormIcon = L.icon({
    iconUrl: 'img/hotel.svg',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22]
});

var cafeIcon = L.icon({
    iconUrl: 'img/fastfood.svg',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22]
});

var stopIcon = L.icon({
    iconUrl: 'img/bus-stop.svg',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22]
});


// Markers
var parkMarker = L.marker(centerPos, {icon: parkIcon, title: "Парк ДГТУ"}).addTo(map).bindPopup("<h3>Парк ДГТУ</h3>Студентческий парк");
var dormMarker = L.marker(dormPos, {icon: dormIcon, title: "Общежитие ДГТУ"}).addTo(map).bindPopup("Общежитие ДГТУ");
var cafeMarker = L.marker(cafePos, {icon: cafeIcon, title: "Шашлычная"}).addTo(map).bindPopup("Шашлычная");
var stopMarker = L.marker(stopPos, {icon: stopIcon, title: "Остановка общежитие РИСИ"}).addTo(map).bindPopup("<h3>Остановка общежитие РИСИ</h3>1, 5, 22, 33");
