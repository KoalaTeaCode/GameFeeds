var phonecatApp = angular.module('phonecatApp');

phonecatApp.controller('BookmarkCtrl', function ($scope, Bookmark) {

  $scope.bookmarks = [];
  Bookmark.get()
      .success(function(data) {
        console.log(data)
          $scope.bookmarks = data;
      });
  $scope.bookmark = {};
  $scope.addBookmark= function() {
    console.log($scope.bookmark)
    $scope.bookmarks.push($scope.bookmark)
    if ($scope.bookmark) {
      Bookmark.post($scope.bookmark)
          .success(function(data) {
              console.log(data);
              $scope.bookmark = {};
          });
    }
  }

  $scope.deleteBookmark= function(bookmark) {
    console.log(bookmark)
    $scope.bookmarks.pop(bookmark)
    if (bookmark._id) {
      Bookmark.delete(bookmark)
        .success(function(data) {
            console.log(data);
        });
    }

  }

});
