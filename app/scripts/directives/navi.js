'use strict';

angular.module('WeddingApp').directive('navi',function(){
  return {
    templateUrl: "views/navi.html",
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
