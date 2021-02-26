require('dotenv').config()

const MailNuggets = require('./index')

let mn = new MailNuggets({
    userId: process.env.MN_USER_ID,
    apiKey: process.env.MN_API_KEY,
    apiSecret: process.env.MN_API_SECRET
});

mn.listEmail()
.then(result => {
    console.log('Result', result.emails.email[0]);
})
.catch(error => {
    console.error('Error', error);
})