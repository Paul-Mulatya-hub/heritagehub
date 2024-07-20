const axios = require('axios');
const moment = require('moment');
const base64 = require('base-64');

const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
const shortCode = process.env.MPESA_SHORT_CODE;
const passKey = process.env.MPESA_PASS_KEY;
const callbackURL = process.env.MPESA_CALLBACK_URL;

const auth = async () => {
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const buffer = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    const response = await axios.get(url, {
        headers: {
            Authorization: `Basic ${buffer}`
        }
    });
    return response.data.access_token;
};

const lipaNaMpesaOnline = async (phone, amount, orderId) => {
    const token = await auth();
    const timestamp = moment().format('YYYYMMDDHHmmss');
    const password = base64.encode(`${shortCode}${passKey}${timestamp}`);
    const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

    const response = await axios.post(
        url,
        {
            BusinessShortCode: shortCode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: phone,
            PartyB: shortCode,
            PhoneNumber: phone,
            CallBackURL: callbackURL,
            AccountReference: orderId,
            TransactionDesc: 'Payment for order'
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;
};

module.exports = { lipaNaMpesaOnline };
