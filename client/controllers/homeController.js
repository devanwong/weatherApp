weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService){

	$scope.city = cityService.city;
	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});
	$scope.submit = function(){
		$location.path("/forecast");
	}

}]);



// http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=bfbfadde58d85a0082954684450cd286
