'use strict';

angular.module('intern-feedback-helloworld')
.filter('celsiusToFahrenheit', function() {
    return function(input) {
        return temperatureConverter.celsiusToFahrenheit(input);
    };
})
.filter('fahrenheitToCelsius', function() {
    return function(input) {
        return temperatureConverter.fahrenheitToCelsius(input);
    };
});
