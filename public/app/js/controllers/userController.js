kornjacolovciApp.controller('userController', ['$scope', '$routeParams', 'FactoryTest', '$location', function($scope, $routeParams, FactoryTest, $location) {
    
     $scope.id = $routeParams.id;

     $scope.goToMyRequests = function(){
     	$location.path('/user/' + $routeParams.id + '/requests');
     }

     $scope.addMyRequest = function(){
     	FactoryTest.addMyRequest({
     		animal_ID : 1,
     		quantity: $scope.quantity,
     		weight: $scope.weight,
     		delivery_date: $scope.deliveryDate,
     		user_ID : $routeParams.id,
     		offer_ID : null,
     		creation_time: null
     	}, function(response){
     		console.log(response);
     	});
     }

	 var getMyRequests = function(){
     	FactoryTest.getMyRequests({id : $scope.id}, function(data){
     			$scope.requests = data;   		
     	});
     }



     getMyRequests();
    
 
}]);