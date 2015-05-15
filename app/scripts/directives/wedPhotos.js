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
    link: function(scope,element,attrs){

      var activeCategory = {};

      scope.photoset.categories = [
        {name: "Our STD's",id:1},
        {name: "Couch Fun",id:2},
        {name: "Lake Day",id:3},
        {name: "The Proposal",id:4},
        {name: "Our Journey",id:5}
      ];

      scope.photoset.category = {};

      scope.photoset.photos = [
        {url: "/images/wedphotos/large/1.jpg",categoryId:1,id:1,thumbUrl: "/images/wedphotos/thumb/1.jpg"},
        {url: "/images/wedphotos/large/2.jpg",categoryId:1,id:2,thumbUrl: "/images/wedphotos/thumb/2.jpg"},
        {url: "/images/wedphotos/large/3.jpg",categoryId:1,id:3,thumbUrl: "/images/wedphotos/thumb/3.jpg"},
        {url: "/images/wedphotos/large/4.jpg",categoryId:1,id:4,thumbUrl: "/images/wedphotos/thumb/4.jpg"},
        {url: "/images/wedphotos/large/5.jpg",categoryId:1,id:5,thumbUrl: "/images/wedphotos/thumb/5.jpg"},
        {url: "/images/wedphotos/large/6.jpg",categoryId:1,id:6,thumbUrl: "/images/wedphotos/thumb/6.jpg"},
        {url: "/images/wedphotos/large/7.jpg",categoryId:1,id:7,thumbUrl: "/images/wedphotos/thumb/7.jpg"},
        {url: "/images/wedphotos/large/8.jpg",categoryId:1,id:8,thumbUrl: "/images/wedphotos/thumb/8.jpg"},
        {url: "/images/wedphotos/large/9.jpg",categoryId:1,id:9,thumbUrl: "/images/wedphotos/thumb/9.jpg"},
        {url: "/images/wedphotos/large/10.jpg",categoryId:1,id:10,thumbUrl: "/images/wedphotos/thumb/10.jpg"},
        {url: "/images/wedphotos/large/11.jpg",categoryId:1,id:11,thumbUrl: "/images/wedphotos/thumb/11.jpg"},
        {url: "/images/wedphotos/large/12.jpg",categoryId:1,id:12,thumbUrl: "/images/wedphotos/thumb/12.jpg"},
        {url: "/images/wedphotos/large/13.jpg",categoryId:1,id:13,thumbUrl: "/images/wedphotos/thumb/13.jpg"},
        {url: "/images/wedphotos/large/14.jpg",categoryId:1,id:14,thumbUrl: "/images/wedphotos/thumb/14.jpg"},
        {url: "/images/wedphotos/large/15.jpg",categoryId:1,id:15,thumbUrl: "/images/wedphotos/thumb/15.jpg"},
        {url: "/images/wedphotos/large/16.jpg",categoryId:1,id:16,thumbUrl: "/images/wedphotos/thumb/16.jpg"},
        {url: "/images/wedphotos/large/17.jpg",categoryId:1,id:17,thumbUrl: "/images/wedphotos/thumb/17.jpg"},
        {url: "/images/wedphotos/large/18.jpg",categoryId:1,id:18,thumbUrl: "/images/wedphotos/thumb/18.jpg"},
        {url: "/images/wedphotos/large/19.jpg",categoryId:1,id:19,thumbUrl: "/images/wedphotos/thumb/19.jpg"},
        {url: "/images/wedphotos/large/20.jpg",categoryId:1,id:20,thumbUrl: "/images/wedphotos/thumb/20.jpg"},
        {url: "/images/wedphotos/large/21.jpg",categoryId:1,id:21,thumbUrl: "/images/wedphotos/thumb/21.jpg"},
        {url: "/images/wedphotos/large/22.jpg",categoryId:1,id:22,thumbUrl: "/images/wedphotos/thumb/22.jpg"},
        {url: "/images/wedphotos/large/23.jpg",categoryId:1,id:23,thumbUrl: "/images/wedphotos/thumb/23.jpg"},
        {url: "/images/wedphotos/large/24.jpg",categoryId:1,id:24,thumbUrl: "/images/wedphotos/thumb/24.jpg"},
        {url: "/images/wedphotos/large/25.jpg",categoryId:1,id:25,thumbUrl: "/images/wedphotos/thumb/25.jpg"},
        {url: "/images/wedphotos/large/26.jpg",categoryId:1,id:26,thumbUrl: "/images/wedphotos/thumb/26.jpg"},
        {url: "/images/wedphotos/large/27.jpg",categoryId:1,id:27,thumbUrl: "/images/wedphotos/thumb/27.jpg"},
        {url: "/images/wedphotos/large/28.jpg",categoryId:1,id:28,thumbUrl: "/images/wedphotos/thumb/28.jpg"},
        {url: "/images/wedphotos/large/29.jpg",categoryId:1,id:29,thumbUrl: "/images/wedphotos/thumb/29.jpg"},
        {url: "/images/wedphotos/large/30.jpg",categoryId:1,id:30,thumbUrl: "/images/wedphotos/thumb/30.jpg"},
        {url: "/images/wedphotos/large/31.jpg",categoryId:1,id:31,thumbUrl: "/images/wedphotos/thumb/31.jpg"},
        {url: "/images/wedphotos/large/32.jpg",categoryId:1,id:32,thumbUrl: "/images/wedphotos/thumb/32.jpg"},
        // {url: "/images/wedphotos/large/33.jpg",categoryId:1,id:33,thumbUrl: "/images/wedphotos/thumb/33.jpg"},
        {url: "/images/wedphotos/large/34.jpg",categoryId:1,id:34,thumbUrl: "/images/wedphotos/thumb/34.jpg"},
        {url: "/images/wedphotos/large/35.jpg",categoryId:1,id:35,thumbUrl: "/images/wedphotos/thumb/35.jpg"},
        {url: "/images/wedphotos/large/36.jpg",categoryId:1,id:36,thumbUrl: "/images/wedphotos/thumb/36.jpg"},
        // {url: "/images/wedphotos/large/37.jpg",categoryId:1,id:37,thumbUrl: "/images/wedphotos/thumb/37.jpg"},
        {url: "/images/wedphotos/large/38.jpg",categoryId:1,id:38,thumbUrl: "/images/wedphotos/thumb/38.jpg"},
        {url: "/images/wedphotos/large/39.jpg",categoryId:1,id:39,thumbUrl: "/images/wedphotos/thumb/39.jpg"},
        {url: "/images/wedphotos/large/40.jpg",categoryId:1,id:40,thumbUrl: "/images/wedphotos/thumb/40.jpg"},
        {url: "/images/wedphotos/large/41.jpg",categoryId:1,id:41,thumbUrl: "/images/wedphotos/thumb/41.jpg"},
        {url: "/images/wedphotos/large/42.jpg",categoryId:1,id:42,thumbUrl: "/images/wedphotos/thumb/42.jpg"},
        {url: "/images/wedphotos/large/43.jpg",categoryId:1,id:43,thumbUrl: "/images/wedphotos/thumb/43.jpg"},
        {url: "/images/wedphotos/large/44.jpg",categoryId:1,id:44,thumbUrl: "/images/wedphotos/thumb/44.jpg"},
        {url: "/images/wedphotos/large/45.jpg",categoryId:1,id:45,thumbUrl: "/images/wedphotos/thumb/45.jpg"},
        {url: "/images/wedphotos/large/46.jpg",categoryId:1,id:46,thumbUrl: "/images/wedphotos/thumb/46.jpg"},
        {url: "/images/wedphotos/large/47.jpg",categoryId:1,id:47,thumbUrl: "/images/wedphotos/thumb/47.jpg"},
        {url: "/images/wedphotos/large/48.jpg",categoryId:1,id:48,thumbUrl: "/images/wedphotos/thumb/48.jpg"},
        {url: "/images/wedphotos/large/49.jpg",categoryId:1,id:49,thumbUrl: "/images/wedphotos/thumb/49.jpg"},
        {url: "/images/wedphotos/large/50.jpg",categoryId:1,id:50,thumbUrl: "/images/wedphotos/thumb/50.jpg"},
        {url: "/images/wedphotos/large/51.jpg",categoryId:1,id:51,thumbUrl: "/images/wedphotos/thumb/51.jpg"},
        {url: "/images/wedphotos/large/52.jpg",categoryId:1,id:52,thumbUrl: "/images/wedphotos/thumb/52.jpg"},
        {url: "/images/wedphotos/large/53.jpg",categoryId:1,id:53,thumbUrl: "/images/wedphotos/thumb/53.jpg"},
        {url: "/images/wedphotos/large/54.jpg",categoryId:1,id:54,thumbUrl: "/images/wedphotos/thumb/54.jpg"},
        {url: "/images/wedphotos/large/55.jpg",categoryId:1,id:55,thumbUrl: "/images/wedphotos/thumb/55.jpg"},
        {url: "/images/wedphotos/large/56.jpg",categoryId:1,id:56,thumbUrl: "/images/wedphotos/thumb/56.jpg"},
        {url: "/images/wedphotos/large/57.jpg",categoryId:1,id:57,thumbUrl: "/images/wedphotos/thumb/57.jpg"},
        {url: "/images/wedphotos/large/58.jpg",categoryId:1,id:58,thumbUrl: "/images/wedphotos/thumb/58.jpg"},
        {url: "/images/wedphotos/large/59.jpg",categoryId:1,id:59,thumbUrl: "/images/wedphotos/thumb/59.jpg"},
        {url: "/images/wedphotos/large/60.jpg",categoryId:1,id:60,thumbUrl: "/images/wedphotos/thumb/60.jpg"},
        {url: "/images/wedphotos/large/61.jpg",categoryId:1,id:61,thumbUrl: "/images/wedphotos/thumb/61.jpg"},
        {url: "/images/wedphotos/large/62.jpg",categoryId:1,id:62,thumbUrl: "/images/wedphotos/thumb/62.jpg"},
        {url: "/images/wedphotos/large/63.jpg",categoryId:1,id:63,thumbUrl: "/images/wedphotos/thumb/63.jpg"},
        {url: "/images/wedphotos/large/64.jpg",categoryId:1,id:64,thumbUrl: "/images/wedphotos/thumb/64.jpg"},
        {url: "/images/wedphotos/large/65.jpg",categoryId:1,id:65,thumbUrl: "/images/wedphotos/thumb/65.jpg"},
        {url: "/images/wedphotos/large/66.jpg",categoryId:1,id:66,thumbUrl: "/images/wedphotos/thumb/66.jpg"},
        {url: "/images/wedphotos/large/67.jpg",categoryId:1,id:67,thumbUrl: "/images/wedphotos/thumb/67.jpg"},
        {url: "/images/wedphotos/large/68.jpg",categoryId:1,id:68,thumbUrl: "/images/wedphotos/thumb/68.jpg"},
        {url: "/images/wedphotos/large/69.jpg",categoryId:1,id:69,thumbUrl: "/images/wedphotos/thumb/69.jpg"},
        {url: "/images/wedphotos/large/70.jpg",categoryId:1,id:70,thumbUrl: "/images/wedphotos/thumb/70.jpg"},
        {url: "/images/wedphotos/large/71.jpg",categoryId:1,id:71,thumbUrl: "/images/wedphotos/thumb/71.jpg"},
        {url: "/images/wedphotos/large/72.jpg",categoryId:1,id:72,thumbUrl: "/images/wedphotos/thumb/72.jpg"},
        {url: "/images/wedphotos/large/73.jpg",categoryId:1,id:73,thumbUrl: "/images/wedphotos/thumb/73.jpg"},
        {url: "/images/wedphotos/large/74.jpg",categoryId:1,id:74,thumbUrl: "/images/wedphotos/thumb/74.jpg"},
        {url: "/images/wedphotos/large/75.jpg",categoryId:1,id:75,thumbUrl: "/images/wedphotos/thumb/75.jpg"},
        {url: "/images/wedphotos/large/76.jpg",categoryId:1,id:76,thumbUrl: "/images/wedphotos/thumb/76.jpg"},
        {url: "/images/wedphotos/large/77.jpg",categoryId:1,id:77,thumbUrl: "/images/wedphotos/thumb/77.jpg"},
        {url: "/images/wedphotos/large/78.jpg",categoryId:1,id:78,thumbUrl: "/images/wedphotos/thumb/78.jpg"},
        {url: "/images/wedphotos/large/79.jpg",categoryId:1,id:79,thumbUrl: "/images/wedphotos/thumb/79.jpg"},
        {url: "/images/wedphotos/large/80.jpg",categoryId:1,id:80,thumbUrl: "/images/wedphotos/thumb/80.jpg"},
        {url: "/images/wedphotos/large/81.jpg",categoryId:1,id:81,thumbUrl: "/images/wedphotos/thumb/81.jpg"},
        {url: "/images/wedphotos/large/82.jpg",categoryId:1,id:82,thumbUrl: "/images/wedphotos/thumb/82.jpg"},
        {url: "/images/wedphotos/large/83.jpg",categoryId:1,id:83,thumbUrl: "/images/wedphotos/thumb/83.jpg"},
        {url: "/images/wedphotos/large/84.jpg",categoryId:1,id:84,thumbUrl: "/images/wedphotos/thumb/84.jpg"},
        {url: "/images/wedphotos/large/85.jpg",categoryId:1,id:85,thumbUrl: "/images/wedphotos/thumb/85.jpg"},
        {url: "/images/wedphotos/large/86.jpg",categoryId:1,id:86,thumbUrl: "/images/wedphotos/thumb/86.jpg"},
        {url: "/images/wedphotos/large/87.jpg",categoryId:1,id:87,thumbUrl: "/images/wedphotos/thumb/87.jpg"},
        {url: "/images/wedphotos/large/88.jpg",categoryId:1,id:88,thumbUrl: "/images/wedphotos/thumb/88.jpg"},
        {url: "/images/wedphotos/large/89.jpg",categoryId:1,id:89,thumbUrl: "/images/wedphotos/thumb/89.jpg"},
        {url: "/images/wedphotos/large/90.jpg",categoryId:1,id:90,thumbUrl: "/images/wedphotos/thumb/90.jpg"},
        {url: "/images/wedphotos/large/91.jpg",categoryId:1,id:91,thumbUrl: "/images/wedphotos/thumb/91.jpg"},
        {url: "/images/wedphotos/large/92.jpg",categoryId:1,id:92,thumbUrl: "/images/wedphotos/thumb/92.jpg"},
        {url: "/images/wedphotos/large/93.jpg",categoryId:1,id:93,thumbUrl: "/images/wedphotos/thumb/93.jpg"},
        {url: "/images/wedphotos/large/94.jpg",categoryId:1,id:94,thumbUrl: "/images/wedphotos/thumb/94.jpg"},
        {url: "/images/wedphotos/large/95.jpg",categoryId:1,id:95,thumbUrl: "/images/wedphotos/thumb/95.jpg"},
        {url: "/images/wedphotos/large/96.jpg",categoryId:1,id:96,thumbUrl: "/images/wedphotos/thumb/96.jpg"},
        {url: "/images/wedphotos/large/97.jpg",categoryId:1,id:97,thumbUrl: "/images/wedphotos/thumb/97.jpg"},
        {url: "/images/wedphotos/large/98.jpg",categoryId:1,id:98,thumbUrl: "/images/wedphotos/thumb/98.jpg"},
        {url: "/images/wedphotos/large/99.jpg",categoryId:1,id:99,thumbUrl: "/images/wedphotos/thumb/99.jpg"},
        {url: "/images/wedphotos/large/100.jpg",categoryId:1,id:100,thumbUrl: "/images/wedphotos/thumb/100.jpg"},
        {url: "/images/wedphotos/large/101.jpg",categoryId:1,id:101,thumbUrl: "/images/wedphotos/thumb/101.jpg"},
        {url: "/images/wedphotos/large/102.jpg",categoryId:1,id:102,thumbUrl: "/images/wedphotos/thumb/102.jpg"},
        {url: "/images/wedphotos/large/103.jpg",categoryId:1,id:103,thumbUrl: "/images/wedphotos/thumb/103.jpg"},
        {url: "/images/wedphotos/large/104.jpg",categoryId:1,id:104,thumbUrl: "/images/wedphotos/thumb/104.jpg"},
        {url: "/images/wedphotos/large/105.jpg",categoryId:1,id:105,thumbUrl: "/images/wedphotos/thumb/105.jpg"},
        {url: "/images/wedphotos/large/106.jpg",categoryId:1,id:106,thumbUrl: "/images/wedphotos/thumb/106.jpg"},
        {url: "/images/wedphotos/large/107.jpg",categoryId:1,id:107,thumbUrl: "/images/wedphotos/thumb/107.jpg"},
        {url: "/images/wedphotos/large/108.jpg",categoryId:1,id:108,thumbUrl: "/images/wedphotos/thumb/108.jpg"},
        {url: "/images/wedphotos/large/109.jpg",categoryId:1,id:109,thumbUrl: "/images/wedphotos/thumb/109.jpg"},
        {url: "/images/wedphotos/large/110.jpg",categoryId:1,id:110,thumbUrl: "/images/wedphotos/thumb/110.jpg"},
        {url: "/images/wedphotos/large/111.jpg",categoryId:1,id:111,thumbUrl: "/images/wedphotos/thumb/111.jpg"},
        {url: "/images/wedphotos/large/112.jpg",categoryId:1,id:112,thumbUrl: "/images/wedphotos/thumb/112.jpg"},
        {url: "/images/wedphotos/large/113.jpg",categoryId:1,id:113,thumbUrl: "/images/wedphotos/thumb/113.jpg"},
        {url: "/images/wedphotos/large/114.jpg",categoryId:1,id:114,thumbUrl: "/images/wedphotos/thumb/114.jpg"},
        {url: "/images/wedphotos/large/115.jpg",categoryId:1,id:115,thumbUrl: "/images/wedphotos/thumb/115.jpg"},
        {url: "/images/wedphotos/large/116.jpg",categoryId:1,id:116,thumbUrl: "/images/wedphotos/thumb/116.jpg"},
        {url: "/images/wedphotos/large/117.jpg",categoryId:1,id:117,thumbUrl: "/images/wedphotos/thumb/117.jpg"},
        {url: "/images/wedphotos/large/118.jpg",categoryId:1,id:118,thumbUrl: "/images/wedphotos/thumb/118.jpg"},
        {url: "/images/wedphotos/large/119.jpg",categoryId:1,id:119,thumbUrl: "/images/wedphotos/thumb/119.jpg"},
        {url: "/images/wedphotos/large/120.jpg",categoryId:1,id:120,thumbUrl: "/images/wedphotos/thumb/120.jpg"},
        {url: "/images/wedphotos/large/121.jpg",categoryId:1,id:121,thumbUrl: "/images/wedphotos/thumb/121.jpg"},
        {url: "/images/wedphotos/large/122.jpg",categoryId:1,id:122,thumbUrl: "/images/wedphotos/thumb/122.jpg"},
        {url: "/images/wedphotos/large/123.jpg",categoryId:1,id:123,thumbUrl: "/images/wedphotos/thumb/123.jpg"},
        {url: "/images/wedphotos/large/124.jpg",categoryId:1,id:124,thumbUrl: "/images/wedphotos/thumb/124.jpg"},
        {url: "/images/wedphotos/large/125.jpg",categoryId:1,id:125,thumbUrl: "/images/wedphotos/thumb/125.jpg"},
        {url: "/images/wedphotos/large/126.jpg",categoryId:1,id:126,thumbUrl: "/images/wedphotos/thumb/126.jpg"},
        {url: "/images/wedphotos/large/127.jpg",categoryId:1,id:127,thumbUrl: "/images/wedphotos/thumb/127.jpg"},
        {url: "/images/wedphotos/large/128.jpg",categoryId:1,id:128,thumbUrl: "/images/wedphotos/thumb/128.jpg"},
        {url: "/images/wedphotos/large/129.jpg",categoryId:1,id:129,thumbUrl: "/images/wedphotos/thumb/129.jpg"},
        {url: "/images/wedphotos/large/130.jpg",categoryId:1,id:130,thumbUrl: "/images/wedphotos/thumb/130.jpg"},
        {url: "/images/wedphotos/large/131.jpg",categoryId:1,id:131,thumbUrl: "/images/wedphotos/thumb/131.jpg"},
        {url: "/images/wedphotos/large/132.jpg",categoryId:1,id:132,thumbUrl: "/images/wedphotos/thumb/132.jpg"},
        {url: "/images/wedphotos/large/133.jpg",categoryId:1,id:133,thumbUrl: "/images/wedphotos/thumb/133.jpg"},
        {url: "/images/wedphotos/large/134.jpg",categoryId:1,id:134,thumbUrl: "/images/wedphotos/thumb/134.jpg"},
        {url: "/images/wedphotos/large/135.jpg",categoryId:1,id:135,thumbUrl: "/images/wedphotos/thumb/135.jpg"},
        {url: "/images/wedphotos/large/136.jpg",categoryId:1,id:136,thumbUrl: "/images/wedphotos/thumb/136.jpg"},
        {url: "/images/wedphotos/large/137.jpg",categoryId:1,id:137,thumbUrl: "/images/wedphotos/thumb/137.jpg"},
        {url: "/images/wedphotos/large/138.jpg",categoryId:1,id:138,thumbUrl: "/images/wedphotos/thumb/138.jpg"},
        {url: "/images/wedphotos/large/139.jpg",categoryId:1,id:139,thumbUrl: "/images/wedphotos/thumb/139.jpg"}

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

      if(attrs.catId)
      {
        var category;
        for(var i = 0, l = scope.photoset.categories.length; i < l; i++)
        {
          category = scope.photoset.categories[i];
          if(parseInt(attrs.catId) === category.id)
          {
            scope.setCategory(category);
            scope.photoset.categories = [category];
            break;
          }
        }
      }
    }
  };
});
