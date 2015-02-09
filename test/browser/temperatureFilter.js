/*global angular*/

define([
    'intern/chai!expect',
    'intern!bdd',
    'intern/order!angular/angular',
    'internalSrc/vanilla-modules/temperatureConverter',
    'intern/order!internalSrc/filters/converter-filters',
    'intern/order!internalSrc/filters/temperatureFilter'
], function(expect, bdd) {

    function inject(fn) {
        return function() {
            angular.injector(['ng', 'temperature-converter.filters']).invoke(fn);
        }
    }

    bdd.describe('temperature filter', function() {

        var celsiusToFahrenheitFilter = null,
            fahrenheitToCelsiusFilter = null;

        bdd.beforeEach(inject(function($filter) {
            celsiusToFahrenheitFilter = $filter('celsiusToFahrenheit');
            fahrenheitToCelsiusFilter = $filter('fahrenheitToCelsius');
        }));

        bdd.it('should be a wrapper for the vanilla module', function() {
            expect(celsiusToFahrenheitFilter(5)).to.equal(41);
            expect(fahrenheitToCelsiusFilter(41)).to.equal(5);
        });

    });
});
