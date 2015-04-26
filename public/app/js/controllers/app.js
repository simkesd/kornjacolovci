var kornjacolovciApp = angular.module('kornjacolovciApp', ['ngRoute','ngResource', 'ngCookies']);

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
        .when('/request/:requestId', {
            templateUrl: 'views/requestDetails.html',
            controller: 'requestsController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'baseController'
        })
        .when('/newSellOffer', {
            templateUrl: 'views/newSellOffer.html',
            controller: 'sellOfferController'
        })
        .when('/sellOffersList', {
            templateUrl: 'views/sellOffersList.html',
            controller: 'sellOfferController'
        })
	.otherwise('/');
});

kornjacolovciApp.controller('baseController', ['$scope', '$cookieStore', '$routeParams', 'FactoryTest', function ($scope,$cookieStore, $routeParams, FactoryTest) {

    $scope.checkUser = function() {
        return $scope.loggedUser =  $cookieStore.get('loggedUser');
    }

    $scope.doLoginF = function() {
        FactoryTest.doLogin({
                username: $scope.username,
                password: $scope.password
            }, function (result) {
                $cookieStore.put('loggedUser',result[0]);
                $scope.loggedUser = result[0];
            }, function (error) {
                $cookieStore.remove('loggedUser');
            }
        )
    }

    $scope.indexInit = function() {
        console.log("Kornjacolovci rulz! :)");
        $scope.checkUser();
    }

    $scope.logout = function() {
        console.log('Loggint out user.');
        $cookieStore.remove('loggedUser');
        location.reload();
    }

}]);
