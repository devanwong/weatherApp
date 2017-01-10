weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService){

	$scope.city = cityService.city;
	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

}]);



// http://api.openweathermap.org/data/2.5/forecast/daily?APPID=bfbfadde58d85a0082954684450cd286
