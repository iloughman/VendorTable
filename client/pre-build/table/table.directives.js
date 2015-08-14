app.directive('scoreColor', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			// var colors = {A:'#49fb35', B:'gold', C:'orange', D:'chocolate', F:'red'};

			var colorClass = scope.vendor.score;

			element.addClass(colorClass);
		}
	};
});

app.directive('percentile', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			element.text(Math.floor(scope.vendor.percentile*100)+"%")
		}
	};
});

app.directive('changeColor', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			var colorClass = scope.vendor.change > 0 ? "positiveChange" : (
				scope.vendor.change < 0 ? "negativeChange" : "noChange");

			element.text(scope.vendor.change > 0 ? "+"+(scope.vendor.change)+"%" : (
				scope.vendor.change < 0 ? (scope.vendor.change)+"%" : scope.vendor.change));

			element.addClass(colorClass)
		}
	};
});

app.directive('visible', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			scope.$watch(attr.visible, function(value){
				element.css('visibility', value ? 'visible' : 'hidden')
			})
		}
	};
});
