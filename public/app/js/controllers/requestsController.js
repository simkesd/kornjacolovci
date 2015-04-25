kornjacolovciApp.controller('requestsController', ['$scope', 'FactoryTest', function($scope, FactoryTest) {

    $scope.requests = [];

    $scope.requestInit = function (){
        $scope.getActiveRequestList();
    }

    $scope.getActiveRequestList = function(){
        FactoryTest.getActiveRequestList({}, function(result){
            $scope.requests = result;
        }, function(error){
            $scope.requests = [];
        });
    }
}]);