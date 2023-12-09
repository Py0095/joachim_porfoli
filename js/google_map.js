
var map;

function initMap() {
    var myLatlng = new google.maps.LatLng(48.862725, 2.287592000000018);

    var mapOptions = {
        zoom: 12,
        center: myLatlng
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    var addresses = ['Boulogne-Billancourt'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&key=YOUR_API_KEY', function (data) {
            var p = data.results[0].geometry.location;
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });
        });
    }
}

google.maps.event.addDomListener(window, 'load', initMap);
