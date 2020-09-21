// Initialize and add the map
function initMap() {
  // The location coordinates
  var location = { lat: 9.05177, lng: 7.46564 };
  // The map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: location, map: map });
}

initMap();