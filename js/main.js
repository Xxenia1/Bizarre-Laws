// Initialize the map
var map = L.map('map').setView([20, 0], 2); // Center at a global level

// Add OpenStreetMap as the basemap
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
