'use strict';

angular.module('WeddingApp').directive('hero',function(){
  return {
    templateUrl: "views/hero.html",
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
