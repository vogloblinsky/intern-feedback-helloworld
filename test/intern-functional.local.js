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
        filename: 'build/quality/functional/junit.xml' // Directory needs to exist before
    }, {
        id: 'Lcov',
        filename: 'build/quality/functional/lcov.info' // Directory needs to exist before
    }, {
        id: 'Console'
    }];

    // Non-functional test suite(s) to run in each browser
    intern.functionalSuites =  [
        'test/functional/index'
    ];

    return intern;
});
