// Initialize the map
var map = L.map('map').setView([20, 0], 2); // Center at a global level

// Add OpenStreetMap as the basemap
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

//load continent boundaries from geojson
fetch('Data/continents_geojson.json') // Update with the correct file path
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



//create a container for search widget and the search button
var searchContainer = document.createElement("map");
    searchContainer.setAttribute("id", "searchContainer");

var searchWidget = document.createElement("input");
    searchWidget.setAttribute("type", "text");
    searchWidget.setAttribute("id", "searchBar");
    searchWidget.setAttribute("placeholder", "Search for a country...");


var searchBtn = document.createElement("button");
    searchBtn.innerHTML = "Search";
    searchBtn.setAttribute("id", "searchBtn");

    //append elements inside the container
    searchContainer.appendChild(searchWidget);
    searchContainer.appendChild(searchBtn);

// Append the container to the document body
document.body.appendChild(searchContainer);

console.log(document.getElementById("searchContainer")); // Debugging check

//add search function