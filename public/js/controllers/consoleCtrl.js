var phonecatApp = angular.module('phonecatApp');

phonecatApp.controller('ConsoleCtrl', function ($scope, Following) {

  $scope.consoles = [
    {
      title: "Xbox",
      img: ""
    },
    {
      title: "PS4",
      img: ""
    },
    {
      title: "Wii U",
      img: ""
    },
  ];

  $scope.follow = function(console) {
    var data = {
      type: "console",
      referenceId: console.title
    }
    Following.post(data)
      .success(function(data) {
          console.log(data);
      });
  }

});
