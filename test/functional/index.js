define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    var url = '../../src/index.html';

    registerSuite({
        name: 'index',

        'convert form': function () {
            return this.remote
                .get(require.toUrl(url))
                .getPageTitle()
                .then(function (title) {
                    assert.strictEqual(title, 'Intern.io feedback hello world', 'Title parsed');
                });
        }
    });
});