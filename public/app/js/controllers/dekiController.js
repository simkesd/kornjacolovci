kornjacolovciApp.controller('dekiController', ['$scope', 'FactoryTest', function($scope, FactoryTest) {
    
     
    var getUsers = function(){
	FactoryTest.getUserList({}, function(result){
	$scope.result = result;
	});	
    }


    $scope.addUser = function(){

	FactoryTest.addUser({username: $scope.username}, function(result){
		alert("user added!");
		getUsers();
	});		
    }

    getUsers();

   
}]);
