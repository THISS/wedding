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
    $scope.submitSuccess = false;

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
      // Remove the alerts from the DOM
      jQuery('.alert').remove();

      // Going to do ajax submit to post.php validator
      RSVP.post(this.frm)
      .success(function(data, status, headers, config){
        jQuery('.rsvp-container').prepend(
              '<div class="alert alert-success rsvp-error-message col-xs-offset-3 col-xs-6" role="alert">' +
                '<strong>Thanks for Responding!</strong>' +
              '</div>');
        // console.log(status);
        // console.log(data);
        // console.log(headers);
        // console.log(config);
        $scope.submitSuccess = true;
      })
      .error(function(data,status){
        // console.log(status);
        // console.log(data);
        jQuery('.rsvp-container').prepend(
            '<div class="alert alert-danger rsvp-error-message col-xs-offset-3 col-xs-6" role="alert">' +
              '<strong>Warning! </strong>' + data.errors.toString() +
            '</div>');
      });
    };

  }]);
