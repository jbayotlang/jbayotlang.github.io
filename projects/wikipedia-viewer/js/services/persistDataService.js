(function () {

  angular.module('WikipediaViewer')
  .factory('PersistDataService', function () {
    var data = {};

    return {
      getData: function () {
        return data;
      },

      setData: function (query, entries) {
        data.entries = entries;
        data.query = query;
      },

      resetData: function () {
        data = {};
      }
    };

  });

})();