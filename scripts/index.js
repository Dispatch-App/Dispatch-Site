function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 17
  });

  getCurrentLocation({
      success: function(location) {
         var loc = {lat: location.coords.latitude, lng: location.coords.longitude};

         new google.maps.Marker({
            map: map,
            position: loc,
            title: "Me"
         });

         map.panTo(loc);
      },

      error: function(e) {
          console.log(e);
          alert("Please enable geolocation");
      }
  });
}

function getCurrentLocation(callbacks) {
    if(navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(
            function(position) {
                callbacks.success(position);
            },

            function(e) {
                callbacks.error(e);
            }
        );
    }
}
