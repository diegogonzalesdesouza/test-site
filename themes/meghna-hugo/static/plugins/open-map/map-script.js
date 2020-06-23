/* ========================================================================= */
/*  Open Map
/* ========================================================================= */

 // position we will use later
 var lat = -23.554117;
 var lon = -46.662224;
 // initialize map
 map = L.map('mapDiv').setView([lat, lon], 13);
 // set map tiles source
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
   maxZoom: 18,
 }).addTo(map);
 // add marker to the map
 marker = L.marker([lat, lon]).addTo(map);
 // add popup to the marker
 marker.bindPopup("<b>Nuveo</b><br />Av. Angélica, 2529<br />São Paulo").openPopup();
