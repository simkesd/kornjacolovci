kornjacolovciApp.factory('FactoryTest', ['$resource', function($resource){
	return $resource("", {}, {
		getUserList :	{ url:"http://localhost:3000/users/userlist", params: {}, method:"GET" , isArray:true},
		addUser	    :   { url:"http://localhost:3000/users/addUser" , params: {username:"@username"}, method:"POST", isArray:false},
		getRequestList : { url : '/requests/active', params: {}, method: 'GET',  timeout : 5000, isArray:true},
		getMyRequests : {url: '/requests', params: {user_id: "@user_id" }, method: 'GET', timeout: 5000}
	});
}]);


