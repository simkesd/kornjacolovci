kornjacolovciApp.controller('simiController', ['$scope', '$http', function($scope, $http) {
    $scope.person = 'Milos kraljina';

    $scope.testf = function() {
        $http({method: 'GET', url : '/users/userlist'}).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;

                alert(JSON.stringify(data));
            }).
            error(function(data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
                alert("ne da radi");
            });
    }
}]);