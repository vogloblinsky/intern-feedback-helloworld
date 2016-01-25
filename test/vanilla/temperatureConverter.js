define([
    'intern/chai!expect',
    'intern!bdd',
    'internalSrc/vanilla-modules/temperatureConverter'
], function(expect, bdd) {

    bdd.describe('test.vanilla.temperatureConverter', function() {

        bdd.it('should convert a celsius temperature to fahrenheit', function() {
            expect(temperatureConverter.celsiusToFahrenheit(5)).to.equal(41);
        });

        bdd.it('should convert a fahrenheit temperature to celsius', function() {
            expect(temperatureConverter.fahrenheitToCelsius(41)).to.equal(6);
        });

    });
});
