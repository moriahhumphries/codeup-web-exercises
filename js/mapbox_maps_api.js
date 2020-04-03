
mapboxgl.accessToken = 'pk.eyJ1IjoibW9yaWFoaHVtcGhyaWVzIiwiYSI6ImNrOGo2c283ZDA0azgzbHBxZGVtMWdzNjcifQ.Hoq9gRxqSSGKBQ_zK17yog';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.839450, 32.951550],
    zoom: 11,

});

var markerOptions = {
    color: "orange",

};

var chiMarker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.839450, 32.951550])
    .addTo(map);

var pluMarker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.830040, 32.968610])
    .addTo(map);

var zoeMarker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.802800, 32.895770])
    .addTo(map);

map.on('click', function () {
    var favoriteRestaurant = new mapboxgl.Popup()
        .setHTML("<h3>Taste of Chicago</h3>")
        .addTo(map);

    chiMarker.setPopup(favoriteRestaurant);
});


map.on('click', function () {
    var secondRestaurant = new mapboxgl.Popup()
        .setHTML("<h3>Pluckers</h3>")
        .addTo(map);

    pluMarker.setPopup(secondRestaurant);
});

map.on('click', function () {
    var zoeRestaurant = new mapboxgl.Popup()
        .setHTML("<h3>Zoe's Kitchen</h3>")
        .addTo(map);

    zoeMarker.setPopup(zoeRestaurant);
});