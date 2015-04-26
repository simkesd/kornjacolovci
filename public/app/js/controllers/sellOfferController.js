kornjacolovciApp.controller('sellOfferController', ['$scope', '$cookieStore',  '$routeParams', 'FactoryTest', function($scope, $cookieStore, $routeParams, FactoryTest) {

    $scope.requestId = $routeParams.requestId;
    $scope.loggedUser =  $cookieStore.get('loggedUser');

    $scope.newSellOfferInit = function() {
        $scope.getAnimals();
    }

    $scope.getRequestDetails = function () {
        FactoryTest.getRequestDetails({request_id: $routeParams.requestId}, function (result) {
                $scope.requestDetails = result;
            }, function (error) {
                $scope.requestDetails = "";
            }
        )
    }
    $scope.submitSellOffer = function(){

        FactoryTest.postNewSellOffer(
            {
                animal_id : $("#animal").val(),
                weight : $scope.weight,
                quantity : $scope.quantity,
                place : $scope.place,
                transport : $("#transport").val(),
                description : $scope.description,
                user_id : $scope.loggedUser.ID
            }, function(){
                alert("Zahtev uspesno poslat.");
            },function() {
                alert('greska');
            });
    }

    $scope.getAnimals = function(){
        FactoryTest.getAnimals({}, function(data){
            $scope.animals = data;
        });
    }
}]);