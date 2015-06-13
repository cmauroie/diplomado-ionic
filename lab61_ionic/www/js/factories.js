angular.module('lab61.Factories', ['ngResource'] )

.factory('information', function() {

        var data = {};

        data.first_name = '';

        data.last_name = '';

        data.email = '';

        return data;
})


.factory('AccessService_Factory', function($resource){
	//return $resource('http://199.180.186.183/rest/access/initialData',{ },{
	//return $resource('http://192.168.34.21/Modipay/rest/access/initialData', { }, {
    console.log("AccessService_Factory");
    return $resource('http://200.91.204.38:8080/servlet/center?data=flight', { }, {
   //  return $resource('http://192.168.34.21/servlet/center?data=flight', { }, {
		get: {
			method:'GET',  
			headers:{
               // 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization',
               'Access-Control-Allow-Origin':'*',
               // 'Access-Control-Allow-Methods':'GET, POST PUT, DELETE, OPTIONS',
               // 'Access-Control-Allow-Credentials':'true',
               // 'Accept':'application/json',
               // 'Cache-Control':'no-cache, no-store, must-revalidate',
               // 'Content-Type':'text/plain',
               'Authorization':'12345'}
 			}
 });
});