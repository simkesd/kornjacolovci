kornjacolovciApp.factory('FactoryTest', ['$resource', function($resource){
	return $resource("", {}, {
		getUserList :	{ url:"http://localhost:3000/users/userlist", params: {}, method:"GET" , isArray:true},
		addUser	    :   { url:"http://localhost:3000/users/addUser" , params: {username:"@username"}, method:"POST", isArray:false},
		getAllRequestList : { url : '/requests/', params: {}, method: 'GET',  timeout : 5000, isArray:true},
		getActiveRequestList : { url : '/requests/active', params: {}, method: 'GET',  timeout : 5000, isArray:true},
		getMyRequests : {url: '/requests/:id', params: {}, method: 'GET', timeout: 5000, isArray:true},
		getRequestDetails : {url : '/requests/:request_id', params : {}, method: 'GET', timeout: 5000, isArray:false}
	});
}]);


