(function () {

  angular.module('WikipediaViewer')
  .controller('SearchController', ['$http', '$scope', '$location', '$route', function ($http, $scope, $location, $route) {
    var controller = this;

    this.init = function () {
      if (!$route.current.regexp.test('/')) {
       $('#search').addClass('open');
       $('#search > form > input[type="search"]').focus(); 
      }
      
    };

    this.find = function (query) {
      // Search
    };

    this.close = function () {
      this.hideModal();
      $scope.$apply(function () {
        $location.path('/')
      });
    }

    this.hideModal = function () {
      $('#search').removeClass('open');
    }

    this.init();
  }]);


//   Nge, school days, shinsekai yori


})();