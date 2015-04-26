kornjacolovciApp.factory('FactoryTest', ['$resource', function($resource){
	return $resource("", {}, {
		getUserList :	{ url:"/users/userlist", params: {}, method:"GET" , isArray:true},
		addUser	    :   { url:"/users/addUser" , params: {username:"@username"}, method:"POST", isArray:false},
		getAllRequestList : { url : '/requests/', params: {}, method: 'GET',  timeout : 5000, isArray:true},
		getActiveRequestList : { url : '/requests/active', params: {}, method: 'GET',  timeout : 5000, isArray:true},
		addMyRequest : {url: '/requests', method: 'POST'},
		getRequestDetails : {url : '/requests/:request_id', params : {}, method: 'GET', timeout: 5000, isArray:true},
		getRequestOffers : {url: '/requests/:request_id/offers', params : {}, method: 'GET', timeout: 5000, isArray: true},
		getMyRequests : {url: '/users/:id/requests/', params: {}, method: 'GET', timeout: 5000, isArray:true},
		doLogin : {url: '/users/login', params: {}, method: 'POST', timeout: 5000, isArray:true},
		getAnimals: {url:'/animals/', params: {}, method: 'GET', isArray:true },
		postNewOffer: {url:'/offers/', params:{}, method: 'POST', timeout: 5000},
		acceptOffer : {url:'/requests/:request_id', params : {}, method : 'PUT'},
		postNewSellOffer : {url: '/sell_offers', params : {}, method : 'POST'},
		getSellOffersList : {url:'/sell_offers', params : {}, method : 'GET', isArray:true}
	});
}]);


