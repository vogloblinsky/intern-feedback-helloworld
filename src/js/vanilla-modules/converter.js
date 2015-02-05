var converter = (function() {

	var waterFreezingTemperature = 32, //(°F)
		coefficient = 1.8;

	/**
	 * celsiusToFahrenheit Convert celsius to fahrenheit temperature
	 * @param  {number} celsiusValue celsius temperature
	 * @return {number} fahrenheit temperature
	 */
	var celsiusToFahrenheit = function(celsiusValue) {
		return (celsiusValue*coefficient) + waterFreezingTemperature;
	};

	/**
	 * celsiusToFahrenheit Convert fahrenheit to celsius temperature
	 * @param  {number} celsiusValue fahrenheit temperature
	 * @return {number} celsius temperature
	 */
	var fahrenheitToCelsius = function(fahrenheitValue) {
		return (fahrenheitValue - waterFreezingTemperature)/coefficient;
	};

	return {
		celsiusToFahrenheit: celsiusToFahrenheit,
		fahrenheitToCelsius: fahrenheitToCelsius
	};

})();