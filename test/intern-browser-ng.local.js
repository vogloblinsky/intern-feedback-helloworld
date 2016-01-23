define([
    './intern-browser'
], function(intern) {
    intern.tunnel = 'NullTunnel';
    intern.tunnelOptions = {
        hostname: 'localhost',
        port: 4444
    };

    intern.reporters = [{
        id: 'JUnit',
        filename: 'build/quality/browser/junit.xml' // Directory needs to exist before
    }, {
        id: 'Lcov',
        filename: 'build/quality/browser/lcov.info' // Directory needs to exist before
    }, {
        id: 'Console'
    }];

    // Non-functional test suite(s) to run in each browser
    intern.suites = [
        'test/browser/temperatureFilter'
    ];

    return intern;
});
