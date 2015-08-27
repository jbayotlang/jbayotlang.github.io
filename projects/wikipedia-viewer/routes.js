(function () {

  angular.module('WikipediaViewer', ['ngRoute'])
  .config(function ($routeProvider) {
      $routeProvider.when('/random', {
        templateUrl: 'templates/random.html',
        controller: 'RandomController',
        controllerAs: 'random'
      })

      .when('/search', {
        templateUrl: 'templates/home.html',
        controller: 'SearchController',
        controllerAs: 'search'
      })

      .when('/search/results', {
        templateUrl: 'templates/search-results.html',
        controller: 'SearchController',
        controllerAs: 'searchResult'
      })

      .when('/', {
        templateUrl: 'templates/home.html'
      })

      .otherwise({ redirectTo: '/'})

    });

})();

