// Create a map centered at a specific location and with a certain zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a base tile layer from an external source (OpenStreetMap in this case)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map
var marker = L.marker([51.5, -0.09]).addTo(map);

