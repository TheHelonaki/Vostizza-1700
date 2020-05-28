var L = require("leaflet");

const center = [38.1500, 22.2133];
const initialZoom = 11;

var map = L.map('map', {
  scrollWheelZoom: false
});


map.setView(center, initialZoom);

new L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
      }).addTo(map);

      
