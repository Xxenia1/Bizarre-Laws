// Initialize the map
var map = L.map('map').setView([20, 0], 2); // Center at a global level

// Add OpenStreetMap as the basemap
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

//load continent boundaries from geojson
fetch('Data/continents.json') // Update with the correct file path
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function(feature) {
                return { color: "transparent", weight: 1, fillOpacity: 0.2 };
            },
            onEachFeature: function(feature, layer) {
                // Highlight effect on hover
                layer.on('mouseover', function() {
                    this.setStyle({ fillOpacity: 0.5, color: "red" });
                });
                layer.on('mouseout', function() {
                    this.setStyle({ fillOpacity: 0.2, color: "transparent" });
                });
                layer.on('click', function() {
                    let bounds = layer.getBounds(); // Get bounding box of continent
                    map.flyToBounds(bounds); // Zoom into continent on click
                });
            }
        }).addTo(map);
    })
    .catch(error => console.error("Error loading GeoJSON:", error));



//create a search bar

