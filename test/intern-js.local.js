define([
    './intern-js'
], function(intern) {
    intern.tunnel = 'NullTunnel';
    intern.tunnelOptions = {
        hostname: 'localhost',
        port: 4444
    };

    intern.environments = [{
        browserName: 'chrome'
    }];

    return intern;
});
