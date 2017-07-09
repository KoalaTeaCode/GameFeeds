var phonecatApp = angular.module('phonecatApp');

phonecatApp.factory('Articles', function($http){
  return {
    get: function(data) {
      return $http({
        method: 'GET',
        url: '/api/articles',
      });
    },
  }
});
