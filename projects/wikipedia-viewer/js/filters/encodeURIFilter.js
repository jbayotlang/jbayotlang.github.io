(function () {

  angular.module('WikipediaViewer')
  .filter('encodeURL', function () {
    return function (url) {
      return "https://en.wikipedia.org/wiki/" + encodeURI(url);
    }
  });
})();