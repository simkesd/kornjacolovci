kornjacolovciApp.controller('requestsController', ['$scope', '$routeParams', 'FactoryTest', function($scope, $routeParams, FactoryTest) {


    $scope.requestListInit = function (){
        $scope.getActiveRequestList();
    }

    $scope.requestDetailsInit = function() {
        $scope.getRequestDetails();
    }

    $scope.getActiveRequestList = function(){
        FactoryTest.getActiveRequestList({}, function(result){
            $scope.requests = result;
        }, function(error){
            $scope.requests = [];
        });
    }

    $scope.getRequestDetails = function() {
        FactoryTest.getRequestDetails({request_id: $routeParams.requestId}, function(result){
            $scope.requestDetails = result;
        }, function(error) {
            $scope.requestDetails = "";
        }
        )}
}]);