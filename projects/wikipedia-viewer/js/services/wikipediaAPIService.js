(function () {

  angular.module('WikipediaViewer')
  .service('WikipediaAPIService', function ($http, $q) {

    
    this.search = function (query) {
      var deffered = $q.defer();
      var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=JSON_CALLBACK&gsrsearch=' + encodeURI(query)
      console.log("WikipediaAPIService URL:", url)
      $http.jsonp(url)
        .then(function (response) {
          console.log("Response Data", response.data.query.pages);
          deffered.resolve(response.data);
          // return deffered.promise
        }, function (response) {
          deffered.reject(response);
          // return deffered.promise
        });
        return deffered.promise;
    };

    this.random = function () {
      // TODO: Transfer Fetching Random Data from Random Controller
    }

  });
})();