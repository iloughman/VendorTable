app.controller('TableCtrl', function($scope, $http, vendorData) {
	$scope.vendorArray = vendorData.vendors;
	$scope.vendorArray.forEach(function(vendor){
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
		$scope.reverseType = ($scope.type === type) ? !$scope.reverseType : false;
		$scope.type = type;
	};
});

app.directive('gradeColor', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			console.log(scope.vendor.score)
			element.addClass(scope.vendor.score);
		}
	};
});