# MailNuggets Api Client
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

### LINCESE
```
Copyright 2021 Andersson Acosta

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```