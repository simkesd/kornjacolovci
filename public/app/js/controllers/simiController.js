kornjacolovciApp.controller('simiController', ['$scope', '$http', function($scope, $http) {
    $scope.person = 'Milos kraljina';
    $scope.users = [];
    $scope.newUsername = "";

    $scope.simiInit = function (){
        $scope.getUserList();
    }

    $scope.getUserList = function() {
        $http({method: 'GET', url : '/users/userlist'}).
            success(function(data, status) {
                $scope.users = data;
            }).
            error(function() {
                return -1;
            });
    }

    $scope.addNewUser = function() {
        var req = {
            method: 'POST',
            url : '/users/adduser',
            data : {
                username : $scope.newUsername
            }
        }
        $http(req).
            success(function(data, status) {
                $scope.getUserList();
            }).
            error(function() {
                return -1;
            });
    }

    $scope.clearUserList = function () {
        $scope.users = [];
    }
}]);