'use strict';

/**
 * @ngdoc function
 * @name srcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the srcApp
 */
angular.module('WeddingApp')
  .controller('DetailsCtrl', ['Map', function (Map) {

    // Base Image Object for Markers on Maps
    var heart = {
      url: '/images/details/heart.png',
      // This marker is 20 pixels wide by 32 pixels tall.
      size: new google.maps.Size(65, 59),
      // The origin for this image is 0,0.
      origin: new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      anchor: new google.maps.Point(32, 59)
    };

    var brideGroom = jQuery.extend({}, heart,
      {
        url: '/images/details/bridegroom.png',
        size: new google.maps.Size(65,68),
        anchor: new google.maps.Point(32, 68)
      });
    var carPark = jQuery.extend({}, heart,
      {
        url: '/images/details/car.png',
        size: new google.maps.Size(65,65),
        anchor: new google.maps.Point(32, 65)
      });

    // Ceremony Map
    var ceremonyMap = Map.create(
      // Map Object
      {
        center: {lat: 49.504953, lng: -119.584583},
        // center: {lat: 49.504716, lng: -119.586748},
        zoom: 16
      },
      [
        // Marker Object
        {
          position: {lat: 49.505538, lng: -119.583038},
          title: 'Car Park To Walking Trail',
          icon: carPark
        },
        {
          position: {lat: 49.506731, lng: -119.581276},
          title: 'Ceremony',
          icon: brideGroom
        }
      ],
      // DOM Node
      'ceremony-map');

    // Reception Map
    var receptionMap = Map.create(
      {
        center: {lat: 49.467422, lng: -119.589408},
        zoom: 17
      },
      [
        {
          position: {lat: 49.467422, lng: -119.589408},
          title: 'Reception',
          icon: heart
        }
      ],
      'reception-map');
  }]);
