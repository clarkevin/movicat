(function(angular) {
    'use strict';

    angular.module('moviecat.in_theaters', ['ngRoute', 'angular.http.service'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatersController'
        });
    }])

    .controller('InTheatersController', ['$scope',
        '$HttpService',
        function($scope, $HttpService) {
            $scope.subjects = [];
            $scope.message = 0;
            $scope.loading = true;
            // var doubanAPIAddr = 'http://api.douban.com/v2/movie/in_theaters';
            // $http.jsonp(doubanAPIAddr + '?callback=JSON_CALLBACK').then(function(res) {
            //     //此处代码在异步请求完成后才执行
            //     console.log(res);
            //     if (res.status == 200) {
            //         $scope.subjects = res.data.subjects;
            //     } else {
            //         $scope.message = '错误信息' + res.statusText;
            //     }
            // }, function(err) {
            //     $scope.message = 'error!' + err.statusText;
            // });
            $HttpService.jsonp(
                'http://api.douban.com/v2/movie/in_theaters', {},
                function(data) {
                    $scope.subjects = data.subjects;
                    $scope.totalCount = data.total;
                    $scope.loading = false;
                    $scope.$apply(); //让指定的表达式重新同步
                }
            );
        }
    ]);
})(angular);
