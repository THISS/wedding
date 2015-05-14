'use strict';

angular.module('WeddingApp').factory('RSVP', ['$http', function RSVPFactory($http){
  return {
    post: function(form){
      return $http({
        method: 'post',
        url: '/rsvp-post.php',
        data: jQuery.param(form),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'} // headers submit as form content-type
      });

      // simple way to do the above
      // return $http.post('/rsvp-post.php',form);
    }
  };
}]);
