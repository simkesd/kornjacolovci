kornjacolovciApp.controller('userController', ['$scope', '$routeParams', 'FactoryTest', '$location', function($scope, $routeParams, FactoryTest, $location) {
    
     $scope.id = $routeParams.id;

     $scope.goToMyRequests = function(){
     	$location.path('/user/' + $routeParams.id + '/requests');
     }

	 var getMyRequests = function(){
     	FactoryTest.getMyRequests({id : $scope.id}, function(data){
     			$scope.requests = data;   		
     	});
     }

     getMyRequests();
    
 
}]);