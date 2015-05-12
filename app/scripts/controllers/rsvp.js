'use strict';

/**
 * @ngdoc function
 * @name WeddingApp.controller:RsvpCtrl
 * @description
 * # RsvpCtrl
 * Controller of the WeddingApp
 */
angular.module('WeddingApp')
  .controller('RsvpCtrl', ['$scope',
  'RSVP',
  function ($scope, RSVP) {

    $scope.frm = {};

    $scope.num = function(){
      if(this.frm.number && this.frm.number > 1)
      {
        return true;
      }else
      {
        return false;
      }
    };

    $scope.formPost = function(){
      // Going to do ajax submit to post.php validator
      RSVP.post(this.frm)
      .success(function(data, status, headers, config){
        console.log(data);
        // console.log(status);
        // console.log(data);
        // console.log(headers);
        // console.log(config);
      })
      .error(function(data,status){
        console.log(status);
        console.log(data);
      });
    };

  }]);
