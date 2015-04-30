angular.module('WeddingApp').directive('wedPhotos',function(){
  // *** This is from the soup to bits codeschool staying sharp with angular
  return {
    templateUrl: 'views/wedPhotos.html',
    controller: function($scope){
      // We set the photoset object in the controller as this will be our point of reference
      $scope.photoset = {};
      // $scope.photoset.categories = [{name: catName, id: #}];
      // $scope.photoset.photos = [{url: imageurl, categoryId: #}];
    },
    link: function(scope,element,attrs,ngModelCtrl){
      var activeCategory = {};
      scope.photoset.categories = [
        {name: "Our STD's",id:1},
        {name: "Couch Fun",id:2},
        {name: "Lake Day",id:3},
        {name: "Our Journey",id:4}
      ];

      scope.photoset.photos = [
        {url: "http://www.fillmurray.com/g/200/300",categoryId:1}
      ];

      scope.isActive = function(category)
      {
        return activeCategory.id === category.id;
      };

      scope.setCategory = function(category){
        if(category === activeCategory)
        {
          activeCategory = {};
        }else
        {
          activeCategory = category;
        }
        scope.category = activeCategory;
      };

      scope.reset = function(){
        activeCategory = {}
        scope.category = activeCategory;
      };
      window.s = scope;
    }
  };
});
