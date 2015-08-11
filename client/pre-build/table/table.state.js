app.config(function ($stateProvider) {
    $stateProvider.state('table', {
        url: '/',
        templateUrl: '/pre-build/table/table.html',
        controller: 'TableCtrl',
        resolve: {
        	vendorData: function(DataService){
        		return DataService.getData()
            }
        }
    });
});

app.factory('DataService', function($http, $q){
	var factory = {};
	factory.getData = function(){
        var defer = $q.defer()
	   $http.get('/pre-build/table/data/vendors.json').success(function(vendorData){
            defer.resolve(vendorData);
       });
       return defer.promise
	}
	return factory;
});

