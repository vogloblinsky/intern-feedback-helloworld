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
        filename: 'tests-reports/functional/junit.xml' // Directory needs to exist before
    }, {
        id: 'Lcov',
        filename: 'tests-reports/functional/lcov.info' // Directory needs to exist before
    }, {
        id: 'Console'
    }];

    // Non-functional test suite(s) to run in each browser
    intern.functionalSuites =  [
        'test/functional/index'
    ];

    return intern;
});
