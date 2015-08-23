(function () {

  angular.module('WikipediaViewer', ['ngRoute'])
  .config(function ($routeProvider) {
      $routeProvider.when('/random', {
        templateUrl: 'templates/random.html',
        controller: 'RandomController',
        controllerAs: 'random'
      })

      // .when('/search', {
        
      // })

      .when('/', {
        templateUrl: 'templates/home.html'
      })

      .otherwise({ redirectTo: '/'})

    });

})();

