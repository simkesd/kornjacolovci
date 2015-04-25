kornjacolovciApp.controller('requestsController', ['$scope', 'FactoryTest', function($scope, FactoryTest) {

    $scope.requests = [1,2,3];

    $scope.requestInit = function (){
        $scope.getRequestList();
    }

    $scope.getRequestList = function(){
        FactoryTest.getRequestList({}, function(result){
            $scope.requests = result;
        }, function(error){
            alert('ne da radi');
        });
    }
}]);