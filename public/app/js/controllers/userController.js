kornjacolovciApp.controller('userController', ['$scope', '$routeParams', 'FactoryTest', function($scope, $routeParams, FactoryTest) {
    
     $scope.id = $routeParams.id;
     
     var getMyRequests = function(){
     	FactoryTest.getMyRequests({user_id : $scope.id}, function(data){
     		$scope.requests = data;
     	});
     }
     

     getMyRequests();
 
}]);