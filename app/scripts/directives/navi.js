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

    }
  };
});
