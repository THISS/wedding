'use strict';

angular.module('WeddingApp').factory('RSVP', ['$http', function RSVPFactory($http){
  return {
    post: function(form){
      return $http({method: 'post', url: '/rsvp-post.php', data: form});
    }
  };
}]);
