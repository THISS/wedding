'use strict';

/**
 * @ngdoc overview
 * @name srcApp
 * @description
 * # srcApp
 *
 * Main module of the application.
 */
angular
  .module('WeddingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .when('/rsvp',{
        templateUrl: 'views/rsvp.html',
        controller: 'RsvpCtrl'
      })
      .when('/proposal',{
        templateUrl: 'views/proposal.html',
        controller: 'ProposalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
