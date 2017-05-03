var gmailApiSync = require('gmail-api-sync');
var google = require('googleapis');

exports.setClientSecretsFile = function (path) {
    gmailApiSync.setClientSecretsFile(path);
};
exports.resetCredentials = function (callback) {
    gmailApiSync.resetCredentials(callback);
};
exports.send = function (token, params, callback) {

    gmailApiSync.authorizeWithToken(token, function (err, oauth) {
        if (err) {
            return callback('Auth error: ' + err, null);
        }
        var gmail = google.gmail('v1');
        var headers = [];

        headers.push('From: <' + params.from + '>');
        headers.push('To: ' + params.to);
        headers.push('Content-type: text/html;charset=iso-8859-1');
        headers.push('MIME-Version: 1.0');
        headers.push('Subject: ' + params.subject);
        headers.push('');
        headers.push(params.body);

        var email = headers.join('\r\n').trim();

        var base64EncodedEmail = new Buffer(email).toString('base64');
        base64EncodedEmail = base64EncodedEmail.replace(/\+/g, '-').replace(/\//g, '_');

        var reqParams = {
            auth: oauth,
            userId: 'me',
            resource: {
                raw: base64EncodedEmail
            }
        };

        gmail.users.messages.send(reqParams, null, function (err, resp) {
            if (!err) {
                return callback(null, resp);
            }
            else {
                return callback('Unable to send email: ' + err, null);
            }
        });
    });
};


