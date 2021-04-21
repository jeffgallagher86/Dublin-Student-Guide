/* --------------------------------------------------------Google Maps API */


function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 53.338101964692584,
            lng: -6.259243506777292
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
            lat: 53.34210922216267,
            lng: -6.2866645128713605
        }, {
            lat: 53.34298875329336,
            lng: -6.267434736721741
        },
        {
            lat: 53.345595807152264,
            lng: -6.263220879604568
        }, {
            lat: 53.3434142084807,
            lng: -6.271053182407339
        }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

}