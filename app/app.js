// Declare app level module which depends on views, and components
var app = angular
    .module('myApp', [
  'ngRoute'
  ])
    .controller(
        'HomeCtrl',
        function($scope, $location, $http) {
            $scope.games = [{"name": "Path of Exile"},{"name": "data"}];
            console.log("alert")

        }


    ).controller(
        'ThreadCtrl',
        function($scope, $location, $http) {
            $http.get('data/gamethreads.json').then(function(response){
                $scope.games=response.data;
            });
        }


    ).controller(
        'CreateThreadCtrl',
        function($scope, $location, $http) {
            $scope.myFunc = function() {
                console.log()
                $http.get('http://localhost:3000/postThread/'+$scope.name).then(function(response){
                    console.log(response.data);
                });

            }
        }


    )
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/bilder',{templateUrl:"/BalticGaming/app/games.html"})
      .when('/impressum',{templateUrl:"/BalticGaming/app/impressum.html"})
      .when('/createthread',{templateUrl:"/BalticGaming/app/createthread.html"});
  }]);


