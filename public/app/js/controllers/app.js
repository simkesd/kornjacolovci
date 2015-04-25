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
		.when('/user/:id',{
            templateUrl: 'views/userView.html',
            controller: 'userController'
        })
        .when('/user/:id/requests/',{
            templateUrl: 'views/userRequests.html',
            controller: 'userController'
        })
        .when('/requests/', {
            templateUrl: 'views/requests.html',
            controller: 'requestsController'
        })
        .when('/request/:requestId/newoffer', {
            templateUrl: 'views/newOffer.html',
            controller: 'offerController'
        })
	.otherwise('/');
});

kornjacolovciApp.controller('baseController', function($scope) {

    $scope.indexInit = function() {
        console.log("Kornjacolovci rulz! :)");
    }

});
