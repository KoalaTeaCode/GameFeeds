var phonecatApp = angular.module('phonecatApp', [
  'Authentication',
  'ngRoute',
  'ngCookies'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
          controller: 'LoginController',
          templateUrl: 'partials/login.html'
      }).
      when('/genre', {
        templateUrl: 'partials/genre-list.html',
        controller: 'GenreCtrl'
      }).
      when('/publishers', {
        templateUrl: 'partials/publisher-list.html',
        controller: 'PublisherCtrl'
      }).
      when('/consoles', {
        templateUrl: 'partials/console-list.html',
        controller: 'ConsoleCtrl'
      }).
      when('/games', {
        templateUrl: 'partials/games-list.html',
        controller: 'GameCtrl'
      }).
      when('/feeds', {
        templateUrl: 'partials/feeds-list.html',
        controller: 'FeedsCtrl'
      }).
      when('/articles', {
        templateUrl: 'partials/articles-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/bookmarks', {
        templateUrl: 'partials/bookmark-list.html',
        controller: 'BookmarkCtrl'
      }).
      when('/favorites', {
        templateUrl: 'partials/favorite-list.html',
        controller: 'FavoritesCtrl'
      }).
      when('/following', {
        templateUrl: 'partials/following-list.html',
        controller: 'FollowingCtrl'
      }).
      when('/articles/genre/:genre', {
        templateUrl: 'partials/articles-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/articles/consoles/:console', {
        templateUrl: 'partials/articles-list.html',
        controller: 'PhoneListCtrl'
      }).
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/articles'
      });
  }]);
  //
  // phonecatApp.run(['$rootScope', '$location', '$cookieStore', '$http',
  //   function ($rootScope, $location, $cookieStore, $http) {
  //       // keep user logged in after page refresh
  //       $rootScope.globals = $cookieStore.get('globals') || {};
  //       if ($rootScope.globals.currentUser) {
  //           $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
  //       }
  //
  //       $rootScope.$on('$locationChangeStart', function (event, next, current) {
  //           // redirect to login page if not logged in
  //           if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
  //               $location.path('/login');
  //           }
  //       });
  //   }]);

phonecatApp.controller('PhoneListCtrl', function ($scope, $sce, $routeParams, Articles, Bookmark, $filter, Favorites) {

  //Default Values
  $scope.titles = "";

  $scope.dateIndex = 0;

  $scope.nextDate = function() {
    $scope.dateIndex += 1;
    setDate();
  }

  $scope.prevDate = function() {
    $scope.dateIndex -= 1;
    setDate();
  }

  $scope.articleFilters = {}

  function setDate() {
    var startDate = new Date();
    startDate.setDate(startDate.getDate()+$scope.dateIndex);
    var startDateInfo = [startDate.getDate(), startDate.getMonth()+1, startDate.getFullYear()];
    $scope.articleFilters.date1 = startDateInfo.join("-");

    var endDate = new Date();
    endDate.setDate(endDate.getDate()+$scope.dateIndex);
    var endDateInfo = [endDate.getDate()+1, endDate.getMonth()+1, endDate.getFullYear()];
    $scope.articleFilters.date2 = endDateInfo.join("-");
  }
  setDate();

  $scope.articleFilters.genre = "";
  if ($routeParams.genre) {
    $scope.articleFilters.genre = $routeParams.genre;
    $scope.articleFilters.filterTerm = "genre";
  }

  $scope.articleFilters.console = "";
  if ($routeParams.console) {
    $scope.articleFilters.platforms = $routeParams.console;
    $scope.articleFilters.filterTerm = "platforms";
  }

  Articles.get()
    .success(function(data) {
      $scope.phones = data;
      console.log(data)
      angular.forEach(data, function (detail) {
        if (detail) {
          $scope.titles += " " + detail.title;
          detail.shares = parseInt(detail.shares);
          try{
            detail.desc = $sce.trustAsHtml(JSON.parse(detail.desc));
          }catch(e){
              //alert(e); //error in the above string(in this case,yes)!
          }
          detail.console = "xbox";
        }
      });
    });

  //@TODO: Use directive
  $scope.selectedArticle = {}
  $scope.readMore = function(article) {
    var modal = document.querySelector("#articleModal");
    $scope.selectedArticle = article;
    // modal.querySelector(".modal-header h4").innerHTML = article.title;
    // modal.querySelector(".modal-body").innerHTML = article.desc + "<br>";
    // modal.querySelector(".modal-body").innerHTML += '<a target="_blank" class="embedly-card" href='+article.link+'>'+article.title+'</a>';
    $("#articleModal").modal('show');
  }

  $scope.addBookmark = function(article) {
    console.log(article)
    Bookmark.post(article)
      .success(function(data) {
          console.log(data);
      });
  }

  $scope.addFavorite = function(article) {
    console.log(article)
    Favorites.post(article)
      .success(function(data) {
          console.log(data);
      });
  }

});
