(function () {

  angular.module('WikipediaViewer')
  .factory('PersistDataService', function () {
    var data = {};
    data.hasData = false;

    return {
      getData: function () {
        return data;
      },

      setData: function (query, entries) {
        data.entries = entries;
        data.query = query;
        data.hasData = true
      },

      resetData: function () {
        data = {};
      }
    };

  });

})();