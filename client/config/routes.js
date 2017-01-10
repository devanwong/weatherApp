var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Service
weatherApp.service('cityService', function() {
	this.city = "Oakland, California";
	console.log(this.city)
});

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
});