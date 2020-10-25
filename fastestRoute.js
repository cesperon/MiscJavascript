// origin point
var pA = new google.maps.LatLng(38.4404, 122.7141);
//way point
var pB = new google.maps.LatLng(37.7749, 122.4194);
//destination point
var pC = new google.maps.LatLng(32.7157, 117.1611;

function fastestRoute(pA, pB, pC) {
  
  //create an array with waypoints to be passed to directions request object
  const waypts = [{

      location: pC,
      stopover: false

  }];

  return new Promise(function(resolve, reject) {
    
    //create directions request object to be passed to directions service call
    var request = {
      origin: pA,
      destination: pB,
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints: waypts,
      avoidHighways: true,
    };
    new google.maps.DirectionsService().route(request, function(response, status) {
      
      //minRoute1 var will hold the fastest route between point A and point B
      var minRoute1 = null;
      //minRoute2 var will hold the fastest route between point B and point C
      var minRoute2 = null;
      
      //iterate through response object which holds all routes passed back from directions service call
      for (var i = 0; i < response.routes.length; i++) {
        
        //compare minRoute1 with distance value of from from first leg of route, if minRoute1's value is greater then we assign distance
        //of first leg to minRoute value
        if (minRoute1 === null || response.routes[i].legs[0].distance.value < minRoute1.legs[0].distance.value) {
          minRoute1 = response.routes[i];
        }
        
        //compare minRoute2 with distance value of from from second leg of route, if minRoute2's value is greater then we assign distance
        //of second leg to minRoute value
        if (minRoute2 === null || response.routes[i].legs[1].distance.value < minRoute2.legs[1].distance.value) {
          minRoute2 = response.routes[i];
        }
      }
    });
  });
}
