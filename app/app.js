// Declare app level module which depends on views, and components
var gamnamehelper = "";
var descriptionhelper = "";
var imglinkhelper = "";
var currentGame;
var app = angular
    .module('myApp', [
        'ngRoute'
    ])
    .controller(
        'HomeCtrl',
        function ($scope, $location, $http) {
            $scope.games = [{"name": "Path of Exile"}, {"name": "data"}];
            console.log("alert")

        }
    ).controller(
        'ThreadCtrl',
        function ($scope, $location, $http) {
            $http.get('data/gamethreads.json').then(function (response) {
                $scope.games = response.data;
            });
            $scope.editItem = function (game) {
                currentGame=game;
            }
        }
    ).controller(
        'CreateThreadCtrl',
        function ($scope, $location, $http) {
            $scope.myFunc = function () {
                console.log()
                $http.get('http://localhost:3000/postThread/' + $scope.name).then(function (response) {
                    console.log(response.data);
                });

            }
        }
    ).controller(
        'UpdateThreadCtrl',
        function ($scope, $location, $http) {
            $scope.name=currentGame.name;
            $scope.image=currentGame.img;
            $scope.textareaid=currentGame.description;
        }
    ).controller(
        'InnerThreadCtrl',
        function ($scope, $location, $http) {
            $scope.gamename = currentGame.name;
            $scope.gamedescr = currentGame.description;
            $scope.gameimg = currentGame.img;

        }
    )
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/bilder', {templateUrl: "/BalticGaming/app/games.html"})
            .when('/impressum', {templateUrl: "/BalticGaming/app/impressum.html"})
            .when('/createthread', {templateUrl: "/BalticGaming/app/createthread.html"})
            .when('/thread', {templateUrl: "/BalticGaming/app/thread.html"})
            .when('/updatethread', {templateUrl: "/BalticGaming/app/updateThread.html"});
    }]);


