app.directive('gbGame', [function () {
    return {
        priority: 1,

        scope: {
            entryString: '@gbGame',
        },

        templateUrl: 'gamethreadTemplate.html',

        restrict: 'A',

        controller: function($scope, $element, $attrs){
            // Attributwerte werden als string übergeben
            $scope.game=JSON.parse($scope.entryString);
            console.log($scope.game);
        }
    };
}])