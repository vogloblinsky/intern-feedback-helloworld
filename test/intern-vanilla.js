// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
define({
    // Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
    // can be used here
    loaderOptions: {
        // Packages that should be registered with the loader in each testing environment
        packages: [{
            name: 'internalSrc',
            location: 'src/js'
        }]
    },

    reporters: [{
        id: 'Lcov',
        filename: 'tests-reports/vanilla/lcov.info' // Directory needs to exist before
    }, {
        id: 'Console'
    }, {
        id: 'test/CustomReporter',
        filename: 'tests-reports/vanilla/junit-custom.xml' // Directory needs to exist before
    }, {
        id: 'JUnit',
        filename: 'tests-reports/vanilla/junit.xml' // Directory needs to exist before
    }],

    // Non-functional test suite(s) to run in each browser
    suites: [
        'test/vanilla/temperatureConverter'
    ],

    // A regular expression matching URLs to files that should not be included in code coverage analysis
    excludeInstrumentation: /^(?:test|src\/vendor|node_modules)\//
});
