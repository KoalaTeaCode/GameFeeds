var phonecatApp = angular.module('phonecatApp');

phonecatApp.controller('FollowingCtrl', function ($scope, Following) {

  $scope.following = [];
  Following.get()
      .success(function(data) {
        console.log(data)
          $scope.following = data;
      });
  $scope.following = {};
  $scope.addFollowing= function() {
    console.log($scope.following)
    $scope.following.push($scope.following)
    if ($scope.following) {
      Following.post($scope.following)
          .success(function(data) {
              console.log(data);
              $scope.following = {};
          });
    }
  }

  $scope.deleteFollowing= function(following) {
    console.log(following)
    $scope.following.pop(following)
    if (following._id) {
      Following.delete(following)
        .success(function(data) {
            console.log(data);
        });
    }
  }

});
