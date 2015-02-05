define([
    'intern/chai!expect',
    'intern!bdd',
    'intern/order!src/vanilla-modules/temperatureConverter'
], function(expect, bdd) {

    bdd.describe('temperatureConverter module', function() {

        bdd.it('should converte a celsius temperature to fahrenheit', function() {
            expect(temperatureConverter.celsiusToFahrenheit(5)).to.equal(41);
        });

        bdd.it('should converte a fahrenheit temperature to celsius', function() {
            expect(temperatureConverter.fahrenheitToCelsius(41)).to.equal(5);
        });

    });
});
