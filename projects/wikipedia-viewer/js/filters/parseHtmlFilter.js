(function () {

  angular.module('WikipediaViewer')
  .filter('parseHtml', function ($sce) {
    return function (val) {
      return $sce.trustAsHtml(val);
    };
  });

})();