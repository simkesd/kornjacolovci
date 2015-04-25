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
				.when('/user/:username',{
            templateUrl: 'views/userView.html',
            controller: 'userController'
        })
        .when('/requests/', {
            templateUrl: 'views/requests.html',
            controller: 'requestsController'
        })
	.otherwise('/');
});

kornjacolovciApp.controller('baseController', function($scope) {

    $scope.indexInit = function() {
        console.log("Kornjacolovci rulz! :)");
    }

});
