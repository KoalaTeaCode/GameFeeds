phonecatApp.factory('Following', function($http){
  return {
    get: function(data) {
      return $http({
        method: 'GET',
        url: '/api/following',
      });
    },
    post: function(data) {
      return $http({
          method: 'POST',
          url: '/api/following',
          data: "referenceId=" + data.referenceId + "&type=" + data.type,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    },
    delete: function(data) {
      return $http({
          method: 'DELETE',
          url: '/api/following',
          data: "id=" + data._id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }
  }
});
