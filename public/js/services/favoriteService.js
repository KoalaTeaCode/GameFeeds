phonecatApp.factory('Favorites', function($http){
  return {
    get: function(data) {
      return $http({
        method: 'GET',
        url: '/api/favorites',
      });
    },
    post: function(data) {
      return $http({
          method: 'POST',
          url: '/api/favorites',
          data: "articleId=" + data._id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    },
    delete: function(data) {
      return $http({
          method: 'DELETE',
          url: '/api/favorites',
          data: "id=" + data._id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }
  }
});
