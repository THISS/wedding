'use strict';

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
      scope.photoset.category = {};

      scope.photoset.photos = [
        {url: "/images/wedphotos/large/0.jpg",categoryId:1,thumbUrl: "/images/wedphotos/thumb/0.jpg"},
        {url: "/images/wedphotos/large/1.jpg",categoryId:1,thumbUrl: "/images/wedphotos/thumb/1.jpg"},
        {url: "/images/wedphotos/large/10.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/10.jpg"},
        {url: "/images/wedphotos/large/11.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/11.jpg"},
        {url: "/images/wedphotos/large/12.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/12.jpg"},
        {url: "/images/wedphotos/large/14.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/14.jpg"},
        {url: "/images/wedphotos/large/15.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/15.jpg"},
        {url: "/images/wedphotos/large/16.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/16.jpg"},
        {url: "/images/wedphotos/large/17.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/17.jpg"},
        {url: "/images/wedphotos/large/18.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/18.jpg"},
        {url: "/images/wedphotos/large/19.jpg",categoryId:1,thumbUrl: "/images/wedphotos/thumb/19.jpg"},
        {url: "/images/wedphotos/large/2.jpg",categoryId:1,thumbUrl: "/images/wedphotos/thumb/2.jpg"},
        {url: "/images/wedphotos/large/20.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/20.jpg"},
        {url: "/images/wedphotos/large/21.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/21.jpg"},
        {url: "/images/wedphotos/large/22.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/22.jpg"},
        {url: "/images/wedphotos/large/23.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/23.jpg"},
        {url: "/images/wedphotos/large/24.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/24.jpg"},
        {url: "/images/wedphotos/large/25.jpg",categoryId:2,thumbUrl: "/images/wedphotos/thumb/25.jpg"},
        {url: "/images/wedphotos/large/26.jpg",categoryId:2,thumbUrl: "/images/wedphotos/thumb/26.jpg"},
        {url: "/images/wedphotos/large/27.jpg",categoryId:1,thumbUrl: "/images/wedphotos/thumb/27.jpg"},
        {url: "/images/wedphotos/large/28.jpg",categoryId:1,thumbUrl: "/images/wedphotos/thumb/28.jpg"},
        {url: "/images/wedphotos/large/29.jpg",categoryId:2,thumbUrl: "/images/wedphotos/thumb/29.jpg"},
        {url: "/images/wedphotos/large/3.jpg",categoryId:1,thumbUrl: "/images/wedphotos/thumb/3.jpg"},
        {url: "/images/wedphotos/large/30.jpg",categoryId:2,thumbUrl: "/images/wedphotos/thumb/30.jpg"},
        {url: "/images/wedphotos/large/31.jpg",categoryId:1,thumbUrl: "/images/wedphotos/thumb/31.jpg"},
        {url: "/images/wedphotos/large/4.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/4.jpg"},
        {url: "/images/wedphotos/large/5.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/5.jpg"},
        {url: "/images/wedphotos/large/6.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/6.jpg"},
        {url: "/images/wedphotos/large/7.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/7.jpg"},
        {url: "/images/wedphotos/large/8.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/8.jpg"},
        {url: "/images/wedphotos/large/9.jpg",categoryId:3,thumbUrl: "/images/wedphotos/thumb/9.jpg"}

      ];

      scope.isActive = function(category)
      {
        return activeCategory.id === category.id;
      };
      scope.isAll = function()
      {
        if(scope.photoset.category && scope.photoset.category.id)
        {
          return false;
        }else
        {
          return true;
        }
      };
      scope.setCategory = function(category){
        if(category === activeCategory)
        {
          activeCategory = {};
        }else
        {
          activeCategory = category;
        }
        scope.photoset.category = activeCategory;
      };

      scope.reset = function(){
        activeCategory = {}
        scope.photoset.category = activeCategory;
      };
    }
  };
});
