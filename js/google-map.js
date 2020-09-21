// Initialize and add the map
function initMap() {
  // The location coordinates
  var location = { lat: 41.213181, lng: -124.004631 };
  // The map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: location, map: map });
}

initMap();