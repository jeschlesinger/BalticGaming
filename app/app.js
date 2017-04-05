// Declare app level module which depends on views, and components
var app = angular
    .module('myApp', [
  'ngRoute'
  ])
    .controller(
        'GamesCtrl',
        function($scope, $location, $http) {
            $scope.games = [{"id": 0,"name": "Path of Exile", "pagename": "poe"},{"id": 1,"name": "data", "pagename": "test"}];
        }

    )
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/bilder',{templateUrl:"/BalticGaming/app/games.html"})
      .when('/impressum',{templateUrl:"/BalticGaming/app/impressum.html"})
      .when('/createthread',{templateUrl:"/BalticGaming/app/createthread.html"});
  }]);


