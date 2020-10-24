var pA = new google.maps.LatLng(38.4404, 122.7141);
var pB = new google.maps.LatLng(37.7749, 122.4194);
var pC = new google.maps.LatLng(32.7157, 117.1611;

function fastestRoute(pA, pB, pC) {

  const waypts = [{

      location: pC,
      stopover: false

  }];

  return new Promise(function(resolve, reject) {
    var request = {
      origin: pA,
      destination: pB,
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints[]: waypts,
      avoidHighways: true,
    };
    new google.maps.DirectionsService().route(request, function(response, status) {
      var minRoute1 = null;
      var minRoute2 = null;

      for (var i = 0; i < response.routes.length; i++) {
        if (minRoute1 === null || response.routes[i].legs[0].distance.value < minRoute1.legs[0].distance.value) {
          minRoute1 = response.routes[i];
        }

        if (minRoute2 === null || response.routes[i].legs[1].distance.value < minRoute2.legs[1].distance.value) {
          minRoute2 = response.routes[i];
        }
      }
    });
  });
}