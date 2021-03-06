//Allowing Angular to make calls to the openweather app.
weatherApp.config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://api.openweathermap.org/**'
    ]);
}])
//Routes
weatherApp.config(function ($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: 'partials/home.html',
		controller:'homeController'
	})

	.when('/forecast', {
		templateUrl: 'partials/forecast.html',
		controller:'forecastController'
	})

	.when('/forecast/:days', {
		templateUrl: 'partials/forecast.html',
		controller: 'forecastController'
	})
});

