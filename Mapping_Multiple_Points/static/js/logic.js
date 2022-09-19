// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
const map = L.map('mapid').setView([40.7, -94.5], 4);

// Get data from cities.js
const cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(city => {
    console.log(city);
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "orange",
        fillColor: "orange",
        fillOpacity: 0.1,
        weight: 3
    })
        .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
        .addTo(map);
});

//  Add a marker to the map for Los Angeles, California.
//L.circleMarker([34.0522, -118.2437], {
//    color: "black",
//    fillColor: "lightyellow",
//    fillOpacity: 0.5,
//    radius: 300
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox.streets',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);