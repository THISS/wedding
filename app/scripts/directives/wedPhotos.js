angular.module('WeddingApp').directive('wedPhotos',function(){
  // *** This is from the soup to bits codeschool staying sharp with angular
  return {
    require: "?ngModel",
    templateUrl: 'views/photo.html',
    controller: function($scope){
      // We set the photoset object in the controller as this will be our point of reference
      $scope.photoset = {};
      // $scope.photoset.categories = [{name: catName, id: #}];
      // $scope.photoset.photos = [{url: imageurl, categoryId: #}];
    },
    link: function(scope,element,attrs,ngModelCtrl){
      var activeCategory = {};
      scope.categories = [
        {name: "Our STD's",id:1},
        {name: "Couch Fun",id:2},
        {name: "Lake Day",id:3},
        {name: "Our Journey",id:4}
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

        ngModelCtrl.$setViewValue(activeCategory);
      };

      scope.reset = function(){
        activeCategory = {}
        ngModelCtrl.$setViewValue(activeCategory);
      };

      ngModelCtrl.$render = function(){
        activeCategory = ngModelCtrl.$viewValue;
      };
    }
  };
});
