angular.module('dispatch', ['ngMap'])

.factory('crimes', function($http) {
    return {
        get: function() {
            return $http({
                    url: 'https://dispatch-danielchristopher1.c9.io/getCrimes',
                    method: "GET",
                    params: {
                        longitude: 23,
                        latitude: 24,
                        range: 10
                    }
                 });
        }
    };
})

.controller('crimeController', ['$scope', 'crimes', function($scope, $crimes) {

    $scope.$on('mapInitialized', function(event, map) {
        $crimes.get().then(function(data) {
            console.log(data);
        });
    });
}]);
