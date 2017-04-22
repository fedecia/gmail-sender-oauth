var sender = require('../index.js');
var assert = require('assert');

//Load Google Api Project client secret.
var CLIENT_SECRET_PATH = 'test/client_secret.json';

var accessToken = {
    'access_token': 'ya29.Gls0BCt9gHK7Bmn5mPQFff6JCaVyt8ZcRiUgLPQL4SmAFk-msJOTIaISi-UiPhRD7QHR2n_8dJXymn08helwDCcnHpGK14sqHXhsH3fgTlvaNz1dZbA7P6LJO4BH',
    'refresh_token': '1/kVLTLeR7vb1e6tuT6XHWBqZ0nG-qwldfeO1uhwdwBok',
    'token_type': 'Bearer',
    'expiry_date': 1492885695675
};


var params = {
    from: 'sender.oauth@gmail.com',
    to: 'sender.oauth@gmail.com',
    subject: 'Nice email',
    body: 'This is a test'
};

sender.setClientSecretsFile(CLIENT_SECRET_PATH);

describe('Positive', function () {
    describe('#send()', function () {
        it('Should succesfully send an email', function (done) {
            sender.send(accessToken, params, function (err, resp) {
                if (err) return done(err);
                else {
                    assert.notEqual(resp.id,null);
                    done();
                }

            });
        });
    });
});
