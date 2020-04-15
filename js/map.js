function initMap() {
    var karachi = {lat: 24.912796, lng: 67.140319};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: karachi
    });
    var marker = new google.maps.Marker({
      position: karachi,
      map: map
    });
}