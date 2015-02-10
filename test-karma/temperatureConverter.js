'use strict';

describe('temperatureConverter module', function () {
    it('should convert a celsius temperature to fahrenheit', function () {
        expect(temperatureConverter.celsiusToFahrenheit(5)).toEqual(41);
    });
    it('should convert a fahrenheit temperature to celsius', function () {
        expect(temperatureConverter.fahrenheitToCelsius(41)).toEqual(5);
    });
});