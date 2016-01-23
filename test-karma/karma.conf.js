// Karma configuration
module.exports = function(config) {

    var source = 'src/js/vanilla-modules/temperatureConverter.js';

    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            source,
            'test-karma/temperatureConverter.js'
        ],
        preprocessors: {
            source: 'coverage'
        },
        reporters: ['progress', 'junit'],
        browsers: ['PhantomJS'],
        logLevel: config.LOG_INFO,
        colors: true,
        singleRun: true,
        junitReporter: {
            outputFile: 'build/quality/test-karma-results.xml',
            suite: ''
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
