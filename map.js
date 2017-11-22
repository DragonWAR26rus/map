var centerPos = [47.2401, 39.71067];
var dormPos = [47.23947, 39.71274];
var cafePos = [47.2403, 39.71281];
var stopPos = [47.23872, 39.71325];

var edgeSize = 30;
var iconSize = [edgeSize, edgeSize];
var iconAnchor = [iconSize[0]/2, iconSize[1]/2];
var iconPopupAnchor = [0, -(edgeSize/2) - 5]

var map = L.map('mapid').setView(centerPos, 17);
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; 2013 OpenStreetMap contributors',
}).addTo(map);

L.control.mousePosition().addTo(map);
L.Control.measureControl().addTo(map);



// Icons
var parkIcon = L.icon({
    iconUrl: 'img/park.png',
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: iconPopupAnchor
});

var dormIcon = L.icon({
    iconUrl: 'img/hotel.svg',
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: iconPopupAnchor
});

var cafeIcon = L.icon({
    iconUrl: 'img/fastfood.svg',
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: iconPopupAnchor
});

var stopIcon = L.icon({
    iconUrl: 'img/bus-stop.svg',
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: iconPopupAnchor
});


// Markers
var parkMarker = L.marker(centerPos, {icon: parkIcon, title: "Парк ДГТУ"}).addTo(map).bindPopup("<h5>Парк ДГТУ</h5>Студентческий парк");
var dormMarker = L.marker(dormPos, {icon: dormIcon, title: "Общежитие ДГТУ"}).addTo(map).bindPopup("<h5>Общежитие ДГТУ</h5>");
var cafeMarker = L.marker(cafePos, {icon: cafeIcon, title: "Шашлычная"}).addTo(map).bindPopup("<h5>Шашлычная</h5>");
var stopMarker = L.marker(stopPos, {icon: stopIcon, title: "Остановка общежитие РИСИ"}).addTo(map).bindPopup("<h5>Остановка общежитие РИСИ</h5>1, 5, 22, 33");
