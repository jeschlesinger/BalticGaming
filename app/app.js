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
                currentGame = game;
            }
        }
    ).controller(
        'CreateThreadCtrl',
        function ($scope, $location, $http) {
            $scope.send = function () {

                var temp = $scope.image;
                temp = encodeURIComponent(temp);
                console.log(temp);
                var url = 'http://localhost:3434/postThread/' + $scope.name + "/" + $scope.textareaid + "/" + temp;
                url = url.replace(/ /g, "%20");
                $http.get(url).then(function (response) {
                    console.log(response.data);
                });

            }

        }
    ).controller(
        'UpdateThreadCtrl',
        function ($scope, $location, $http) {
            $scope.name = currentGame.name;
            $scope.image = currentGame.img;
            $scope.textareaid = currentGame.description;

            $scope.update = function () {
                var temp = $scope.image;
                temp = encodeURIComponent(temp);
                var url = 'http://localhost:3434/updateThread/' + $scope.name + "/" + $scope.textareaid + "/" + temp;
                url = url.replace(/ /g, "%20");
                $http.get(url).then(function (response) {
                    console.log(response.data);
                });

            }
            $scope.delete = function () {
                var temp = $scope.image;
                temp = encodeURIComponent(temp);
                var url = 'http://localhost:3434/deleteThread/' + $scope.name;
                url = url.replace(/ /g, "%20");
                $http.get(url).then(function (response) {
                    console.log(response.data);
                });

            }
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
            .when('/', {templateUrl: "/BalticGaming/app/firstpage.html"})
            .when('/impressum', {templateUrl: "/BalticGaming/app/impressum.html"})
            .when('/createthread', {templateUrl: "/BalticGaming/app/createthread.html"})
            .when('/thread', {templateUrl: "/BalticGaming/app/thread.html"})
            .when('/updatethread', {templateUrl: "/BalticGaming/app/updateThread.html"});
    }]);


