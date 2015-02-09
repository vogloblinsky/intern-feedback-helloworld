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
                
                .findByName('celsiusInput')
                .click()
                .pressKeys('1').end()

                .findByName('fahrenheitInput')
                .getProperty('value')
                .then(function (value) {
                    console.log('value: ', value);
                    assert.strictEqual(value, '33.79', 'Temperature parsed');
                });
        }
    });
});