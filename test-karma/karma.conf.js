// Karma configuration
module.exports = function(config) {

	var source = 'src/js/vanilla-modules/temperatureConverter.js';

    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            sources,
            'test-karma/temperatureConverter.js'
        ],
        preprocessors: {
            source: 'coverage'
        },
        reporters: ['progress', 'junit', 'story', 'coverage'],
        browsers: ['Chrome'],
        logLevel: config.LOG_INFO,
        colors: true,
        singleRun: true,
        junitReporter: {
            outputFile: 'test-karma-results.xml',
            suite: ''
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
