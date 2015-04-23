var kornjacolovciApp = angular.module('kornjacolovciApp', ['ngRoute']);

kornjacolovciApp.config(function($routeProvider){
    $routeProvider
        .when('/s',{
            templateUrl: 'views/simi.html'
        })
        .when('/m',{
            templateUrl: 'views/maric.html'
        }).otherwise('/');
});

kornjacolovciApp.controller('baseController', function($scope) {
    $scope.sayHello = function() {
        alert("Hello!");
    }
});