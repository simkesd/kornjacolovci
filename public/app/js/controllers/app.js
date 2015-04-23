var kornjacolovciApp = angular.module('kornjacolovciApp', ['ngRoute']);

kornjacolovciApp.config(function($routeProvider){
    $routeProvider
        .when('/s',{
            templateUrl: 'views/simi.html',
            controller: 'simiController'
        })
        .when('/m',{
            templateUrl: 'views/maric.html',
            controller: 'maricController'
        }).otherwise('/');
});

kornjacolovciApp.controller('baseController', function($scope) {
    $scope.sayHello = function() {
        alert("Hello!");
    }
});