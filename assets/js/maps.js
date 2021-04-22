/* --------------------------------------------------------https://www.youtube.com/watch?v=Zxf1mnP5zcw tutorial */

function initMap() {
    var options = {
        zoom: 14,
        center: {
            lat: 53.338101964692584,
            lng: -6.259243506777292
        }
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    var markers = [{
            coords: {
                lat: 53.34210922216267,
                lng: -6.2866645128713605
            },
            content: '<p>Guinness Storehouse</p>'
        },
        {
            coords: {
                lat: 53.34298875329336,
                lng: -6.267434736721741
            },
            content: '<p>Dublin Castle</p>'
        },
        {
            coords: {
                lat: 53.345595807152264,
                lng: -6.263220879604568
            }
        },
        {
            coords: {
                lat: 53.3434142084807,
                lng: -6.271053182407339
            }
        }

    ];

    // Loop through markers
    for(var i =0;i < markers.length;i++){
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
}