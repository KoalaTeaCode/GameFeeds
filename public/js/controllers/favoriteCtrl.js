var phonecatApp = angular.module('phonecatApp');

phonecatApp.controller('FavoritesCtrl', function ($scope, Favorites) {

  $scope.favorites = [];
  Favorites.get()
      .success(function(data) {
        console.log(data)
          $scope.favorites = data;
      });
  $scope.favorite = {};
  $scope.addFavorites= function() {
    console.log($scope.favorite)
    $scope.favorites.push($scope.favorite)
    if ($scope.favorite) {
      Favorites.post($scope.favorite)
          .success(function(data) {
              console.log(data);
              $scope.favorite = {};
          });
    }
  }

  $scope.deleteFavorites= function(favorite) {
    console.log(favorite)
    $scope.favorites.pop(favorite)
    if (favorite._id) {
      Favorites.delete(favorite)
        .success(function(data) {
            console.log(data);
        });
    }

  }

});
