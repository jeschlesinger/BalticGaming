// Declare app level module which depends on views, and components
angular
    .module('myApp', [
  'ngRoute'
  ])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/bilder',{templateUrl:"/BalticGaming/app/bilder.html"})
      .when('/impressum',{templateUrl:"/BalticGaming/app/impressum.html"});
  }]);
