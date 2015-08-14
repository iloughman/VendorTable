app.directive('scoreColor', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			// var colors = {A:'#49fb35', B:'gold', C:'orange', D:'chocolate', F:'red'};

			var colorClass = scope.vendor.score;

			element.addClass(colorClass)

			// scope.$watch('vendor.score', function(value, oldValue){
			// 	console.log('new',value)
			// 	console.log('old', oldValue)
			// 	element.css('color', colors[value]);
			// });
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

			// var colors = {'positiveChange':'green', 'negativeChange':'darkred','noChange':'grey'}

			// scope.$watch('vendor.change', function(value ,oldValue){
			// 	console.log('old',oldValue);
			// 	console.log('new', value);
			// 	element.text(scope.vendor.change > 0 ? "+"+(scope.vendor.change)+"%" : (
			// 		scope.vendor.change < 0 ? (scope.vendor.change)+"%" : scope.vendor.change));
			// 	element.css('color', colors[colorClass])
			// });
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
