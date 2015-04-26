kornjacolovciApp.controller('requestsController', ['$scope', '$http', '$routeParams', 'FactoryTest', function ($scope,$http, $routeParams, FactoryTest) {


    $scope.requestListInit = function () {
        $scope.getActiveRequestList();
    }

    $scope.requestDetailsInit = function () {
        $scope.getRequestDetails();
        $scope.getRequestOffers();
    }

    $scope.getActiveRequestList = function () {
        FactoryTest.getActiveRequestList({}, function (result) {
            $scope.requests = result;
        }, function (error) {
            $scope.requests = [];
        });
    }

    $scope.getRequestDetails = function () {
        FactoryTest.getRequestDetails({request_id: $routeParams.requestId}, function (result) {
                $scope.requestDetails = result;
            }, function (error) {
                $scope.requestDetails = "";
            }
        )
    }

    $scope.getRequestOffers = function () {
        FactoryTest.getRequestOffers({request_id: $routeParams.requestId}, function (result) {
                $scope.requestOffers = result;
            }, function (error) {
                $scope.requestOffers = [];
            }
        )
    }

    $scope.acceptOffer = function (offerId) {
        alert(offerId);
        $http({method: 'PUT', url : '/requests/'+$routeParams.requestId, data : {offer_ID : offerId}}).
            success(function(data, status) {
                alert('prihvacena ponuda');
            }).
            error(function() {
                alert('greska');
            });

        //FactoryTest.acceptOffer({ request_id : $routeParams.requestId}, function(result) {
        //    alert(22222);
        //});
        //FactoryTest.acceptOffer({offerer_ID : offerId, request_ID : $routeParams.requestId}, function (result) {
        //        $scope.requestOffers = result;
        //    }
        //)
    }

}]);