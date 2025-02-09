// Initialize the map
var map = L.map('map').setView([20, 0], 2); // Center at a global level

// Add OpenStreetMap as the basemap
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

//load continent boundaries from geojson
/*fetch('Data/continents.json') // Update with the correct file path
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function(feature) {
                return { color: "grey", weight: 1, fillOpacity: 0.2 };
            },
            onEachFeature: function(feature, layer) {
                // Highlight effect on hover
                layer.on('mouseover', function() {
                    this.setStyle({ fillOpacity: 0.5, color: "red" });
                });
                layer.on('mouseout', function() {
                    this.setStyle({ fillOpacity: 0.2, color: "grey" });
                });
                layer.on('click', function() {
                    map.fitBounds(layer.getBounds()); // Zoom into continent on click
                });
            }
        }).addTo(map);
    })
    .catch(error => console.error("Error loading GeoJSON:", error));*/

// Define continent boundaries (simplified example, use GeoJSON for accuracy)
var continents = {
    "Africa": {bounds: [[-35, -20], [37, 55]], center: [0, 20]},
    "Asia": {bounds: [[-10, 60], [55, 150]], center: [30, 100]},
    "Europe": {bounds: [[35, -25], [70, 45]], center: [55, 15]},
    "North America": {bounds: [[10, -170], [75, -50]], center: [40, -100]},
    "South America": {bounds: [[-55, -80], [15, -35]], center: [-15, -60]},
    "Oceania": {bounds: [[-50, 110], [0, 180]], center: [-25, 135]}
};

// Highlight continents on hover
for (let continent in continents) {
    let layer = L.rectangle(continents[continent].bounds, {color: "transparent", weight: 1, fillOpacity: 0.2}).addTo(map);
    
    layer.on('mouseover', function() {
        this.setStyle({fillOpacity: 0.5, color: "red"});
    });
    layer.on('mouseout', function() {
        this.setStyle({fillOpacity: 0.2, color: "transparent"});
    });
    layer.on('click', function() {
        map.flyTo(continents[continent].center, 4); // Zoom to continent
    });
}
