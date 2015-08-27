(function () {

  angular.module('WikipediaViewer')
  .controller('RandomController', ['$http', function($http) {
    this.entry = {};
    var controller = this,
        init = function () {
          controller.getRandomEntry();
        };
    

    this.getRandomEntry = function () {
      $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&format=json&generator=random&grnnamespace=0&grnlimit=1&callback=JSON_CALLBACK')
      .success(function (data) {
        for (var prop in data.query.pages) {
          controller.entry = data.query.pages[prop];
        }
      });
    }

    init();
    

  }]);


})();