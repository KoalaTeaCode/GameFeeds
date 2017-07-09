var phonecatApp = angular.module('phonecatApp');

phonecatApp.controller('FeedsCtrl', function ($scope, Feeds) {

  $scope.feeds = [];
  Feeds.get()
      .success(function(data) {
        console.log(data)
          $scope.feeds = data;
      });
  $scope.feed = {};
  $scope.addFeed = function() {
    console.log($scope.feed)
    $scope.feeds.push($scope.feed)
    if ($scope.feed) {
      Feeds.post($scope.feed)
          .success(function(data) {
              console.log(data);
              $scope.feed = {};
          });
    }
  }

  $scope.deleteFeed = function(feed) {
    console.log(feed)
    $scope.feeds.pop(feed)
    if (feed._id) {
      Feeds.delete(feed)
        .success(function(data) {
            console.log(data);
        });
    }
  }

});
