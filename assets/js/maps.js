//------------------------------------------------------------- Map markers
var markers_list = [{
        coords: {
            lat: 53.34210922216267,
            lng: -6.2866645128713605
        },
        content: '<h6>Guinness Storehouse</h6>'
    },
    {
        coords: {
            lat: 53.34298875329336,
            lng: -6.267434736721741
        },
        content: '<h6>Dublin Castle</h6>'
    },
    {
        coords: {
            lat: 53.345595807152264,
            lng: -6.263220879604568
        },
        content: '<h6>Temple Bar</h6>'
    },
    {
        coords: {
            lat: 53.3434142084807,
            lng: -6.271053182407339
        },
        content: '<h6>Christ Church Cathederal</h6>'
    },
    {
        coords: {
            lat: 53.343838316674955,
            lng: -6.254603788682655
        },
        content: '<h6>Trinity College</h6>'
    },
    {
        coords: {
            lat: 53.338689730579766,
            lng: -6.2666201598468865
        },
        content: '<h6>DIT Aungier Street</h6>'
    },
    {
        coords: {
            lat: 53.34071093445668,
            lng: -6.2654705445027945
        },
        content: '<h6>Dublin Business School</h6>'
    },
    {
        coords: {
            lat: 53.35005547059088,
            lng: -6.2520012156663896
        },
        content: '<h6>Busaras</h6>'
    },
    {
        coords: {
            lat: 53.34431348351751,
            lng: -6.240082875190646
        },
        content: '<h6>Bord Gais Energy Theatre</h6>'
    },
    {
        coords: {
            lat: 53.35037606102821,
            lng: -6.26771313101038
        },
        content: '<h6>Cineworld</h6>'
    },
    {
        coords: {
            lat: 53.34855869351882,
            lng: -6.2571889310104485
        },
        content: '<h6>Abbey Theatre</h6>'
    },
    {
        coords: {
            lat: 53.34521464940263,
            lng: -6.267426590687993
        },
        content: '<h6>The Temple Bar</h6>'
    },
    {
        coords: {
            lat: 53.34393236893571,
            lng: -6.263658802174667
        },
        content: '<h6>The Stags Head</h6>'
    },
    {
        coords: {
            lat: 53.34855869351882,
            lng: -6.2571889310104485
        },
        content: '<h6>Abbey Theatre</h6>'
    },
    {
        coords: {
            lat: 53.335645790094866,
            lng: -6.265416644503038
        },
        content: '<h6>Devitts Pub</h6>'
    },
    {
        coords: {
            lat: 53.34323047072809,
            lng: -6.2645499733387
        },
        content: '<h6>Boojum</h6>'
    },

];

function initMap() {
    var options = {
        zoom: 14,
        center: {
            lat: 53.34738507428953,
            lng: -6.259331175190513
        }
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);



    // Loop through markers
    for (var i = 0; i < markers_list.length; i++) {
        addMarker(markers_list[i]);
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