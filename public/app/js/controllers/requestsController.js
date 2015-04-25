kornjacolovciApp.controller('requestsController', ['$scope', 'FactoryTest', function($scope, FactoryTest) {

    $scope.requests = [];

    $scope.requestInit = function (){
        $scope.getRequestList();
    }

    $scope.getRequestList = function(){
        FactoryTest.getRequestList({}, function(result){
            $scope.requests = result;
        }, function(error){
            $scope.requests = [1,2,3,4,5];
        });
    }
}]);