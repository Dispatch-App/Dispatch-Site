angular.module('dispatch', ['ngMap'])

.factory('crimes', function($http) {
    return {
        get: function() {
            return $http({
                    url: 'https://dispatch-danielchristopher1.c9.io/getCrimes',
                    method: "GET",
                    params: {
                        longitude: 37,
                        latitude: 37,
                        range: 6000
                    }
            });
        }
    };
})

.controller('crimeController', ['$scope', 'crimes', function($scope, $crimes) {

    $scope.$on('mapInitialized', function(event, map) {
        $crimes.get().then(function(response) {
            $scope.crimes = response.data.crimes;
        });
    });
}]);
