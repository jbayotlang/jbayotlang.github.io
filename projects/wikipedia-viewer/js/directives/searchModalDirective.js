(function () {

  angular.module('WikipediaViewer')
  .directive('searchModal', ['$location', function ($location) {
    return {
      restrict: 'E',
      templateUrl: 'templates/search-modal.html',
      controller: 'SearchController',
      controllerAs: 'search',
      link: function (scope, element, attrs, controller) {
        element.find('#search, button.close').on('click keyup', function (event) {
         if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
          controller.close('/');
         }
        });
      }
    };s
  }]);


})();