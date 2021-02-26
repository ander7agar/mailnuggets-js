# MailNuggets Api Client
![Version](https://img.shields.io/npm/v/mailnuggets.svg?style=flat&logo=npm)
![License](https://img.shields.io/npm/l/mailnuggets)

Api Client Wrapper for MailNuggets service

### Installation
```shell
npm install mailnuggets
```

### How to use
- Get your api credentials on your [MailNuggets Profile](https://www.mailnuggets.com/usersettings)

![img.png](doc/img.png)

- And configure the client with your credentials

```js
const MailNuggets = require('mailnuggets')

const MN = new MailNuggets({
    userId: 'yourUserId',
    apiKey: 'yourApiKey',
    apiSecret: 'yourApiSecret'
});

MN.listEmails()
    .then(result => {
        console.log('Result', result.emails.email[0]);
    })
    .catch(error => {
        console.error('Error', error);
    })
```