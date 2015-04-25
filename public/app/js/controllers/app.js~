var kornjacolovciApp = angular.module('kornjacolovciApp', ['ngRoute','ngResource']);

kornjacolovciApp.config(function($routeProvider){
    $routeProvider
        .when('/s',{
            templateUrl: 'views/simi.html',
            controller: 'simiController'
        })
        .when('/m',{
            templateUrl: 'views/maric.html',
            controller: 'maricController'
        })
	.when('/d',{
            templateUrl: 'views/deki.html',
            controller: 'dekiController'
        })
	.otherwise('/');
});

kornjacolovciApp.controller('baseController', function($scope) {

    $scope.indexInit = function() {
        console.log("Kornjacolovci rulz! :)");
    }

});