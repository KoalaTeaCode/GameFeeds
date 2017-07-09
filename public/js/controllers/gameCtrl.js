var phonecatApp = angular.module('phonecatApp');

phonecatApp.controller('GameCtrl', function ($scope) {

  $scope.games = [
    {
      title: "Halo",
      img: ""
    },
    {
      title: "Final Fantasy",
      img: ""
    },
    {
      title: "Destiny",
      img: ""
    },
  ];

});
