# gmail-sender-oauth

[![npm version](https://badge.fury.io/js/gmail-sender-oauth.svg)](https://badge.fury.io/js/gmail-sender-oauth)
[![Build Status](https://travis-ci.org/fedecia/gmail-sender-oauth.svg?branch=master)](https://travis-ci.org/fedecia/gmail-sender-oauth)
[![Coverage Status](https://coveralls.io/repos/github/fedecia/gmail-sender-oauth/badge.svg?branch=master)](https://coveralls.io/github/fedecia/gmail-sender-oauth?branch=master)

Send emails with Gmail API using an OAuth2 object

## Installation

```sh
#install and save
npm install gmail-sender-oauth --save
```

## Usage
Require the module.
```js
var gmailSender = require('gmail-sender-oauth');
```
Load Google Api Project client secret. To get this file follow [Step 1](https://developers.google.com/gmail/api/quickstart/nodejs) .
```js
gmailSender.setClientSecretsFile('./client_secret.json');
```
### Send Email (Requires Oauth2 authentication see below)
Send an email specifying all the headers (i.e 'from', 'to', 'subject', 'body').
```js
var params = {
    from: 'sender.oauth@gmail.com',
    to: 'sender.oauth@gmail.com',
    subject: 'Win an iPhone 7 today!!!',
    body: 'This is a test'
};
gmailSender.send(accessToken, params, function (err, resp) {
  if (err) {
    return console.error('Something went wrong: ' + err);
  }
  else {
      console.log('Message sent with id: ' + resp.id);
  }

});
```

### Authentication with Access Token
This assumes you already have an access token from Google Api. To get one, see test [Generate Access Token](../master/test/generate_access_token.js) and if you need to start from scratch, generate a Server Auth code first, see test [Generate Server Auth code](../master/test/generate_access_token.js) .

#Terminal output
```sh
~/personal/gmail-sender-oauth/test$ node generate_server_auth.js 
Authorize this app by visiting this url: https://accounts.google.com/o/oauth2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.compose&response_type=code&client_id=1081826302113-deknk5sgd6n2vutgv3l4ub4530qqc8kh.apps.googleusercontent.com&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob
If you need a accessToken to be generated as well, run: 
node generate_access_token <SERVER_AUTH_CODE>, with the code you received from the visited URL.

~/personal/gmail-sender-oauth/test$ node generate_access_token.js 4/AR34xAC0Z437ItI_27FmpDYmCeNMpMWNyZk0G6cV6EQ
token: {"access_token":"ya29.Gls0BCt9gHK7Bmn5mPQFff6JCaVyt8ZcRiUgLPQL4SmAFk-msJOTIaISi-UiPhRD7QHR2n_8dJXymn08helwDCcnHpGK14sqHXhsH3fgTlvaNz1dZbA7P6LJO4BH","refresh_token":"1/kVLTLeR7vb1e6tuT6XHWBqZ0nG-qwldfeO1uhwdwBok","token_type":"Bearer","expiry_date":1492885695675}
```
