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
    content: 'This is a test'
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
