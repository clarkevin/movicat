(function(angular) {
    'use strict';

    angular.module('moviecat.coming_soon', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/coming_soon', {
            templateUrl: 'coming_soon/view.html',
            controller: 'ComingSoonController'
        });
    }])

    .controller('ComingSoonController', ['$scope', function($scope) {

    }]);
})(angular);
