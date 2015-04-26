kornjacolovciApp.controller('offerController', ['$scope', '$cookieStore',  '$routeParams', 'FactoryTest', function($scope, $cookieStore, $routeParams, FactoryTest) {

    $scope.requestId = $routeParams.requestId;
    $scope.loggedUser =  $cookieStore.get('loggedUser');

    $scope.offerInit = function() {
        $scope.getRequestDetails();
    }

    $scope.getRequestDetails = function () {
        FactoryTest.getRequestDetails({request_id: $routeParams.requestId}, function (result) {
                $scope.requestDetails = result;
            }, function (error) {
                $scope.requestDetails = "";
            }
        )
    }
    $scope.submitOffer = function(){

        FactoryTest.postNewOffer(
            {
                offerer_ID : $scope.loggedUser.ID,
                request_ID : $scope.requestId,
                price: $scope.offerPrice,
                details: $scope.offerDetails
            }, function(){
                alert("Zahtev uspesno poslat.");
            },function() {
                alert('greska');
            });
    }
}]);