phonecatApp.factory('Bookmark', function($http){
  return {
    get: function(data) {
      return $http({
        method: 'GET',
        url: '/api/bookmark',
      });
    },
    post: function(data) {
      return $http({
          method: 'POST',
          url: '/api/bookmark',
          data: "articleId=" + data._id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    },
    delete: function(data) {
      return $http({
          method: 'DELETE',
          url: '/api/bookmark',
          data: "id=" + data._id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }
  }
});
