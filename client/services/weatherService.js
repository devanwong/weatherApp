//Weather API calling 
weatherApp.service('weatherService', ['$resource', function ($resource){
	this.GetWeather = function(city, days){
	var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { get: {method:"JSONP"}});
	return weatherAPI.get({ q: city, cnt: days, APPID:'bfbfadde58d85a0082954684450cd286' });
	};
}]);