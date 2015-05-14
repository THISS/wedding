'use strict';

angular.module('WeddingApp').factory('Map', function MapFactory(){

  // (function loadScript () {
  //   var apiKey = 'AIzaSyB4CfXvZFuoMj4BhVTYfPHy4mvNFqUKwJc';
  //   var script = document.createElement('script');
  //   script.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey;
  //   document.body.appendChild(script);
  // }());

  return {
    // Need to pass in a mapOptionsObject and a markerObject
    create: function(mapOptionsObj, markerOptionsObjArray, domElement){

      // Example mapOptionsObject
      // {zoom: 8, center: {lat: 44884, lng: 9383}}

      // The Style Array
      var styleArray = [
        {"featureType":"administrative",
        "elementType":"all",
        "stylers":[
          {"visibility":"on"},
          {"lightness":33}
        ]},
        {"featureType":"landscape",
        "elementType":"all",
        "stylers":[
          {"color":"#f2e5d4"}
        ]},
        {"featureType":"poi.park",
        "elementType":"geometry",
        "stylers":[
          {"color":"#c5dac6"}
        ]},
        {"featureType":"poi.park",
        "elementType":"labels",
        "stylers":[
          {"visibility":"on"},
          {"lightness":20}]
        },
        {"featureType":"poi.business",
        "elementType":"labels",
        "stylers":[
          {"visibility":"off"}
        ]
        },
        {"featureType":"poi.attraction",
        "elementType":"labels",
        "stylers":[
          {"visibility":"off"}
        ]
        },
        {"featureType":"poi.place_of_worship",
        "elementType":"labels",
        "stylers":[
          {"visibility":"off"}
        ]
        },
        {"featureType":"poi.school",
        "elementType":"labels",
        "stylers":[
          {"visibility":"off"}
        ]
        },
        {"featureType":"road",
        "elementType":"all",
        "stylers":[
          {"lightness":20}
        ]},
        {"featureType":"road.highway",
        "elementType":"geometry",
        "stylers":[
          {"color":"#c5c6c6"}
        ]
        },
        {"featureType":"road.arterial",
        "elementType":"geometry",
        "stylers":[
          {"color":"#e4d7c6"}
        ]},
        {"featureType":"road.local",
        "elementType":"geometry",
        "stylers":[
          {"color":"#fbfaf7"}
        ]},
        {"featureType":"water",
        "elementType":"all",
        "stylers":[
          {"visibility":"on"},
          {"color":"#acbcc9"}
        ]}
      ];

      // Put Map code here
      var mapOptions = {
        // disable scrollwheel zooming
        scrollwheel: false,
        // We will add the style array to the map here
        styles: styleArray
      };
      // Perform a deep merge of the objects so that the passed in obj adds / replaces the targets
      jQuery.extend(true, mapOptions, mapOptionsObj);
      // Get the DOM Element
      var mapElement = document.getElementById(domElement);
      // Create the Map
      var map = new google.maps.Map(mapElement, mapOptions);

      // Markers
      for(var i = 0, j = markerOptionsObjArray.length; i < j; i++){
        // Put the marker code here
        var markerOptions = {
          map: map,
          zindex: i
        };
        // Perform a deep merge of the objects so that the passed in obj adds / replaces the targets
        jQuery.extend(true, markerOptions, markerOptionsObjArray[i]);
        // Create the Marker
        var myMarker = new google.maps.Marker(markerOptions);

        // Animation functions
        google.maps.event.addDomListener(mapElement, 'mouseover', function(){
          myMarker.setAnimation(google.maps.Animation.BOUNCE);
        });
        google.maps.event.addDomListener(mapElement, 'mouseout', function(){
          myMarker.setAnimation(null);
        });
      } // End of For Loop

      // Return the map
      return map;
    }
  };
});
