kornjacolovciApp.controller('userController', ['$scope', '$routeParams', 'FactoryTest', '$location', function($scope, $routeParams, FactoryTest, $location) {
    
     $scope.id = $routeParams.id;
     $scope.animals = [];

     $scope.goToMyRequests = function(){
     	$location.path('/user/' + $routeParams.id + '/requests');
     }

     $scope.addMyRequest = function(){

     	var selectedAnimalID =  document.querySelector("select").value;

		FactoryTest.addMyRequest(
		{
			animal_ID: selectedAnimalID,
			quantity: $scope.quantity,
			weight: $scope.weight,
			delivery_date: $scope.deliveryDate,
			user_ID: $routeParams.id,
			offer_ID: null,
			creation_time: null

		}, function(){
			alert("Zahtev uspesno poslat.");
		});

     }

	 var getMyRequests = function(){
     	FactoryTest.getMyRequests({id : $scope.id}, function(data){
     			$scope.requests = data;   		
     	});
     }

     var getAnimals = function(){
     	FactoryTest.getAnimals({}, function(data){
     		$scope.animals = data;
     	});
     }

     getMyRequests();
     getAnimals();
 
}]);