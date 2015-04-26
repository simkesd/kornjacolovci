kornjacolovciApp.controller('userController', ['$scope', '$routeParams', 'FactoryTest', '$location', function($scope, $routeParams, FactoryTest, $location) {
    
     $scope.id = $routeParams.id;
     $scope.animals = [];
     $scope.quantity = 100;
     $scope.weight = 100;
     $scope.selectedAnimalID = 3;
     $scope.selectedAnimalName = "Macka";


     $scope.goToMyRequests = function(){
     	$location.path('/user/' + $routeParams.id + '/requests');
     }

     $scope.chooseAnimal = function(animalID){
          $scope.selectedAnimalID = animalID;
          $scope.selectedAnimalName = getAnimalName(animalID);
          
     }

     $scope.addMyRequest = function(){

		FactoryTest.addMyRequest(
		{
			animal_ID: $scope.selectedAnimalID,
			quantity: $scope.quantity,
			weight: $scope.weight,
			delivery_date: $scope.deliveryDate,
			user_ID: $routeParams.id,
			offer_ID: null,
			creation_time: null

		}, function(){
               
			alert("Zahtev uspesno poslat.");
               goToMyRequests();
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

     var getAnimalName = function(ID){
          for (var i = 0; i < $scope.animals.length; i++){
               if ($scope.animals[i].ID == ID )
                    return $scope.animals[i].name;
          }
     }

     $scope.increaseQuantity = function(x){
          $scope.quantity+=x;
          if ($scope.quantity > 1000) $scope.quantity = 1000;
     }
     $scope.decreaseQuantity = function(x){
          $scope.quantity-=x;
          if ($scope.quantity < 0) $scope.quantity = 0;
     }

     $scope.increaseWeight = function(x){
          $scope.weight+=x;
          if ($scope.weight > 1000 ) $scope.weight = 1000;
     }
     $scope.decreaseWeight = function(x){
          $scope.weight-=x;
          if ($scope.weight < 0) $scope.weight = 0;
     }

     getMyRequests();
     getAnimals();

 
}]);