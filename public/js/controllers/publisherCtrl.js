var phonecatApp = angular.module('phonecatApp');

phonecatApp.controller('PublisherCtrl', function ($scope) {

  $scope.publishers = [
    {
      title: "IGN",
      img: ""
    },
    {
      title: "Gamepot",
      img: ""
    },
    {
      title: "Game Informer",
      img: ""
    },
  ];

});
