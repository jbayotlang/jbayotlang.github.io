(function () {

  var app = angular.module('stylizeStories', []);

  app.controller("NewsController", ['$http', function ($http) {
    var news = this;
    news.stories = [];
    
    $http.get('http://www.freecodecamp.com/news/hot').success(function (data) {
      news.stories = data;
    });

    this.setImage = function (story) {
      if (story.image) {
        return story.image;
      } else {
        return story.author.picture
      }
    };

  }]);

})();

