/* This showResult function is used as the callback function*/

function showResult(result) {
    document.getElementById('latitude').value = result.geometry.location.lat();
    document.getElementById('longitude').value = result.geometry.location.lng();
}

function getLatitudeLongitude(callback, address) {
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    geocomplete = address || 'Ferrol, Galicia, Spain';
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                callback(results[0]);
            }
        });
    }
}

var button = document.getElementById('geocomplete');

button.addEventListener("change", function () {
    var address = document.getElementById('geocomplete').value;
    getLatitudeLongitude(showResult, address)
});



 //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
/*      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);*/

      var userLat = document.getElementById('latitude').value;
      var userLon = document.getElementById('longitude').value;
      var dLat = toRad(24.8899 -  userLat);    //24.8419
      var dLon = toRad(67.1924 - userLon);     //67.0623
      var lat1 = toRad(24.8899);
      var lat2 = toRad(userLat);
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;

      var time = d/50;
      
    document.getElementById('time').innerHTML = time.toFixed(2).toString().split(".")[0] + " Hours and " +
    time.toFixed(2).toString().split(".")[1] + " mins away from your Destination";
      

      console.log(time);
     // return d;
     document.getElementById('distance').value = Math.round(d) + " km";
      console.log(d);
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }