// Initialize the map
var map = L.map('map').setView([20, 0], 2); // Center at a global level

// Add OpenStreetMap as the basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
