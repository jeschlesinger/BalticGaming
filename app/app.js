// Declare app level module which depends on views, and components
var app = angular
    .module('myApp', [
  'ngRoute'
  ])
    .controller(
        'EntryCtrl',
        function($scope, $location, $http) {
            $http.get('data/gamethreads.json').then(function(response){
              console.log(response.data);
                $scope.games=response.data;
            });
        }

    )
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/bilder',{templateUrl:"/BalticGaming/app/games.html"})
      .when('/impressum',{templateUrl:"/BalticGaming/app/impressum.html"});
  }]);
