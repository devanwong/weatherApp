var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// directives need to have the angular.module above.
// DIRECTIVES
weatherApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'custDirectives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});

