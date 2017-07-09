var phonecatApp = angular.module('phonecatApp');

phonecatApp.controller('GenreCtrl', function ($scope) {

  $scope.genres = [
      {
          "name": "Action",
          "parent": "none"
      },
      {
          "name": "Ball and paddle",
          "parent": "Action"
      },
      {
          "name": "Beat 'em up and hack and slash",
          "parent": "Action"
      },
      {
          "name": "Traditional Fighting game",
          "parent": "Action"
      },
      {
          "name": "Ring fighting game",
          "parent": "Action"
      },
      {
          "name": "Mascot Fighting game",
          "parent": "Action"
      },
      {
          "name": "MOBA",
          "parent": "Action"
      },
      {
          "name": "Maze game",
          "parent": "Action"
      },
      {
          "name": "Pinball game",
          "parent": "Action"
      },
      {
          "name": "Platform game",
          "parent": "Action"
      },
      {
          "name": "Shooter",
          "parent": "none"
      },
      {
          "name": "First-person shooter",
          "parent": "Shooter"
      },
      {
          "name": "Massively multiplayer online first person shooter",
          "parent": "Shooter"
      },
      {
          "name": "Light gun shooter",
          "parent": "Shooter"
      },
      {
          "name": "Shoot 'em up",
          "parent": "Shooter"
      },
      {
          "name": "Tactical shooter",
          "parent": "Shooter"
      },
      {
          "name": "Rail shooter",
          "parent": "Shooter"
      },
      {
          "name": "Third-person shooter",
          "parent": "Shooter"
      },
      {
          "name": "Action-adventure",
          "parent": "none"
      },
      {
          "name": "Stealth game",
          "parent": "Action-adventure"
      },
      {
          "name": "Survival horror",
          "parent": "Action-adventure"
      },
      {
          "name": "Adventure",
          "parent": "none"
      },
      {
          "name": "Real-time 3D adventures",
          "parent": "Adventure"
      },
      {
          "name": "Text adventures",
          "parent": "Adventure"
      },
      {
          "name": "Graphic adventures",
          "parent": "Adventure"
      },
      {
          "name": "Visual novels",
          "parent": "Adventure"
      },
      {
          "name": "Interactive movie",
          "parent": "Adventure"
      },
      {
          "name": "Role-playing",
          "parent": "none"
      },
      {
          "name": "Western RPGs and Japanese RPGs (JRPGs)",
          "parent": "Role-playing"
      },
      {
          "name": "Role-playing Choices",
          "parent": "Role-playing"
      },
      {
          "name": "Use of fantasy in RPGs",
          "parent": "Role-playing"
      },
      {
          "name": "Sandbox RPGs",
          "parent": "Role-playing"
      },
      {
          "name": "Action RPGs",
          "parent": "Role-playing"
      },
      {
          "name": "MMORPGs",
          "parent": "Role-playing"
      },
      {
          "name": "Rogue RPGs",
          "parent": "Role-playing"
      },
      {
          "name": "Tactical RPGs",
          "parent": "Role-playing"
      },
      {
          "name": "Simulation",
          "parent": "none"
      },
      {
          "name": "Construction and management simulation",
          "parent": "Simulation"
      },
      {
          "name": "Life simulation",
          "parent": "Simulation"
      },
      {
          "name": "Vehicle simulation",
          "parent": "Simulation"
      },
      {
          "name": "Strategy",
          "parent": "none"
      },
      {
          "name": "4X game",
          "parent": "Strategy"
      },
      {
          "name": "Artillery game",
          "parent": "Strategy"
      },
      {
          "name": "Real-time strategy (RTS)",
          "parent": "Strategy"
      },
      {
          "name": "MMORTS",
          "parent": "Strategy"
      },
      {
          "name": "Real-time tactics",
          "parent": "Strategy"
      },
      {
          "name": "Tower defense",
          "parent": "Strategy"
      },
      {
          "name": "Turn-based strategy",
          "parent": "Strategy"
      },
      {
          "name": "Turn-based tactics",
          "parent": "Strategy"
      },
      {
          "name": "Wargame",
          "parent": "Strategy"
      },
      {
          "name": "Sports",
          "parent": "none"
      },
      {
          "name": "Racing",
          "parent": "Sports"
      },
      {
          "name": "Sports game",
          "parent": "Sports"
      },
      {
          "name": "Competitive",
          "parent": "Sports"
      },
      {
          "name": "Sports-based fighting",
          "parent": "Sports"
      },
      {
          "name": "Other notable genres",
          "parent": "none"
      },
      {
          "name": "MMOGs",
          "parent": "Other notable genres"
      },
      {
          "name": "Casual game",
          "parent": "Other notable genres"
      },
      {
          "name": "Music game",
          "parent": "Other notable genres"
      },
      {
          "name": "Party game",
          "parent": "Other notable genres"
      },
      {
          "name": "Programming game",
          "parent": "Other notable genres"
      },
      {
          "name": "Logic game",
          "parent": "Other notable genres"
      },
      {
          "name": "Trivia game",
          "parent": "Other notable genres"
      },
      {
          "name": "Board game / Card game",
          "parent": "Other notable genres"
      },
      {
          "name": "Idle gaming",
          "parent": "none"
      },
      {
          "name": "Advergame",
          "parent": "Video game genres by purpose"
      },
      {
          "name": "Art game",
          "parent": "Video game genres by purpose"
      },
      {
          "name": "Casual game",
          "parent": "Video game genres by purpose"
      },
      {
          "name": "Christian game",
          "parent": "Video game genres by purpose"
      },
      {
          "name": "Educational game",
          "parent": "Video game genres by purpose"
      },
      {
          "name": "Electronic sports",
          "parent": "Video game genres by purpose"
      },
      {
          "name": "Exergame",
          "parent": "Video game genres by purpose"
      },
      {
          "name": "Serious game",
          "parent": "Video game genres by purpose"
      },
  ];

});
