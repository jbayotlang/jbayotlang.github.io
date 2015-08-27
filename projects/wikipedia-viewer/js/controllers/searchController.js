(function () {

  angular.module('WikipediaViewer')
  .controller('SearchController', ['$http', '$scope', '$location', '$route', '$timeout', 'WikipediaAPIService', 'PersistDataService' , function ($http, $scope, $location, $route, $timeout, WikipediaAPIService, PersistDataService) {
    var controller = this;
    this.q = ''

    this.init = function () {

      // TODO: Better handling of this.......
      if ($route.current.regexp.test('/search')) {
       $('#search').addClass('open');
       $('#search > form > input[type="search"]').focus(); 
      }

      if ($route.current.regexp.test('/')) {
        this.hideModal();
      }

      if ($route.current.regexp.test('/search/results')) {
        this.hideModal();
      }
    };

    this.find = function (query) {
      PersistDataService.resetData();
      WikipediaAPIService.search(query)
      .then(function (result) {
        PersistDataService.setData(query, result.query.pages);
      }, function (error) {
        console.log(error)
      });
      $timeout(function () {
        controller.close('/search/results');
      });
      this.q = ''
    };

    this.getResults = function () {
      /* TODO: Handle this if no results, query where entered
          Example: User when to search/results
      */
      var data = PersistDataService.getData();
      return data;
    }

    this.close = function (path) {
      this.hideModal();
      $scope.$apply(function () {
        $location.path(path)
      });
    }

    this.hideModal = function () {
      $('#search').removeClass('open');
    }

    this.init();
  }]);

})();