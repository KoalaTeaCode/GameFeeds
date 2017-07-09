phonecatApp.factory('Feeds', function($http){
  return {
    get: function(data) {
      return $http({
        method: 'GET',
        url: '/api/feeds',
      });
    },
    post: function(data) {
      return $http({
          method: 'POST',
          url: '/api/feeds',
          data: "title=" + data.title + "&link=" + data.link,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    },
    delete: function(data) {
      return $http({
          method: 'DELETE',
          url: '/api/feeds',
          data: "id=" + data._id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }
  }
});
