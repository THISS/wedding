angular.module('WeddingApp').directive('photos',function(){
  return {
    require: "?ngModel",
    templateUrl: 'views/photo.html',
    link: function(scope,element,attrs,required){
      var activeCategory = {};
      scope.categories = Category.query();

      scope.isActive = function(category)
      {
        return activeCategory && activeCategory.id === category.id;
      };

      scope.toggleCategory = function(category){
        if(category === activeCategory)
        {
          activeCategory = {};
        }else
        {
          activeCategory = category;
        }

        required.$setViewValue(activeCategory);
      };

      required.$render = function(){
        activeCategory = required.$viewValue;
      };
    }
  };
});
