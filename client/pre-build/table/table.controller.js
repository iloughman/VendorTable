app.controller('TableCtrl', function($scope, $http, vendorData) {
	$scope.vendorArray = vendorData.vendors;
	$scope.vendorArray.forEach(function(vendor){
		vendor.percentile = +vendor.percentile;
		vendor.change = +vendor.change;
		vendor.checked = false;
	});
	$scope.hover = false;
	$scope.clickedClass = false;

	$scope.updateCheckbox = function(clickedVendor){
		!clickedVendor.checked
		$scope.vendorArray.forEach(function(vendor){
			if (clickedVendor !== vendor) {
				vendor.checked = false;
			}
		});
	};

	$scope.order = function(type){
		$scope.reverseType = ($scope.type === type || $scope.type === '-'+type) ? !$scope.reverseType : false;
		if (type === 'change' || type === 'percentile'){
			$scope.type = '-'+type;
		} else {	
			$scope.type = type;
		}
	};
});