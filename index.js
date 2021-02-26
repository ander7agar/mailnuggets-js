const crypto = require('crypto');
const axios = require('axios')
const convert = require('fast-xml-parser');

const MAILNUGGETS_API_URL = 'https://www.mailnuggets.com/users/api';

class MailNuggets {
    constructor(options = {}) {
        this.options = options;

        if (options.userId && options.apiKey && options.apiSecret) {
            this.options.baseUrl = MAILNUGGETS_API_URL;
            this.__client = axios.create(this.options);
        } else {
            throw new Error('Invalid api credentials')
        }
    }

    /**
     *
     * @param {string} endpoint
     * @param params
     * @return {string}
     * @private
     */
    __makeSignatureUrl(endpoint, params = {}) {
        let signatureUrl = `${MAILNUGGETS_API_URL}/${endpoint}?APIUSERID=${this.options.userId}&APIKEY=${this.options.apiKey}`
        for (const key in params) {
            if (params[key]) {
                signatureUrl += `&${key}=${params[key]}`;
            }
        }

        let signature = crypto.createHmac('sha256', this.options.apiSecret)
            .update(signatureUrl)
            .digest('hex');

        return `${signatureUrl}&SIGNATURE=${signature}`;

    }

    /**
     *
     * @param endpoint
     * @param params
     * @return {Promise<unknown>}
     * @private
     */
    __exec(endpoint, params = {}) {
        return new Promise((resolve, reject) => {
            let urlWithSignature = this.__makeSignatureUrl(endpoint, params);
            //console.log(urlWithSignature)
            this.__client.get(urlWithSignature)
                .then(response => {
                    let data = convert.parse(response.data);
                    if (!data.errors) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
                .catch(error => {
                    reject(error);
                })
        })

    }

    /**
     *
     * @return {Promise<unknown>}
     */
    listAllThrowaways() {
        return this.__exec('listall');
    }

    lookupThrowaway(throwawayName) {
        return this.__exec('lookup', { THROWAWAYNAME: throwawayName});
    }

    addThrowaway(throwawayName = null) {
        return this.__exec('add', { THROWAWAYNAME: throwawayName});
    }

    removeThrowaway(throwawayName) {
        return this.__exec('remove', { THROWAWAYNAME: throwawayName});
    }

    listEmail(emaiId = null) {
        return this.__exec('listemails', { EMAILID: emaiId});
    }

    repostEmail(emaiId = null) {
        return this.__exec('repostemail', { EMAILID: emaiId});
    }
}

module.exports = MailNuggets;