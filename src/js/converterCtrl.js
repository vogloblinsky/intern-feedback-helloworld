'use strict';

angular.module('intern-feedback-helloworld')
    .controller('ConverterCtrl', [
        '$scope',
        'celsiusToFahrenheitFilter',
        'fahrenheitToCelsiusFilter',
        function($scope, celsiusToFahrenheitFilter, fahrenheitToCelsiusFilter) {

            $scope.celsiusTemperature = 0;
            $scope.fahrenheitTemperature = 0;

            $scope.editedInput = null;
			$scope.markEdited = function(which) {
				$scope.editedInput = which;
			};

            $scope.$watch('celsiusTemperature', function(newValue, oldValue) {
            	if (newValue !== oldValue && $scope.editedInput === 'C') {
                    $scope.fahrenheitTemperature = celsiusToFahrenheitFilter(newValue);
                }
            });

            $scope.$watch('fahrenheitTemperature', function(newValue, oldValue) {
                if (newValue !== oldValue && $scope.editedInput === 'F') {
                    $scope.celsiusTemperature = fahrenheitToCelsiusFilter(newValue);
                }
            });
        }
    ]);
