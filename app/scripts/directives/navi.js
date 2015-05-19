'use strict';

angular.module('WeddingApp').directive('navi',function(){
  return {
    templateUrl: "views/navi.html",
    controller: function($scope, $location){
      // Check to see what page we are on.
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };

      $scope.toggleNav = function(){
        jQuery('.navbar-nav').toggleClass("open");
      };

      // Initialise the countdown clock
      // Wedding date
      var wedDate = new Date("August 16, 2015 15:00:00")
      var nowDate = new Date();
      // Now date
      $scope.clock = jQuery(".wedding-countdown").FlipClock((wedDate - nowDate)/1000, {
        clockFace: 'DailyCounter',
        countdown: true,
        showSeconds: false
      });
    }
  };
});
