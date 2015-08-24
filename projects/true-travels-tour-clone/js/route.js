(function () {

  angular.module('TrueTravelsClone', ['ngRoute'])
  .config(function ($routeProvider) {

    $routeProvider.when('/', {
      templateUrl:'',
      controller: '',
      controllerAs: 'search'
    })

    .otherwise({
      // TODO: Implement a 404 page
      redirectTo: '/'
    });

  });
})();