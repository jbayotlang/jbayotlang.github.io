(function () {

  var app = angular.module('stylizeStories', ['ui.bootstrap']);

  app.constant("moment", moment)

  /* Filters */
  app.filter('filterUpvote', function () {
    return function (length) {
      if (length > 1) {
        return 'Upvotes'
      } else {
        return 'Upvote'
      }
    };
  });

  /* TODO: Implement multiple arguments for filter */
  app.filter('truncStr', function () {
    return function (string) {
      var length = 50;
      return string.length > length ? string.substr(0, length-1)+'....' : string;

    };
  });

  app.filter('timeSince', function () {
    return function (date) {
      return moment(date).fromNow()
    }
  });

  /* Controllers */
  app.controller("NewsController", ['$http', '$scope', function ($http, $scope) {
    var news = this;
    news.stories = [];
    news.dateSample = new moment();
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

