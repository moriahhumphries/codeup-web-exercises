
mapboxgl.accessToken = 'pk.eyJ1IjoibW9yaWFoaHVtcGhyaWVzIiwiYSI6ImNrOGo2c283ZDA0azgzbHBxZGVtMWdzNjcifQ.Hoq9gRxqSSGKBQ_zK17yog';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.839450, 32.951550],
    zoom: 13,

});

var markerOptions = {
    color: "orange",

};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.839450, 32.951550])
    .addTo(map);

map.on('click', function () {
    var favoriteRestaurant = new mapboxgl.Popup()
        .setHTML("<h3>Taste of Chicago</h3>")
        .addTo(map);

    marker.setPopup(favoriteRestaurant);
});
