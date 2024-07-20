const express = require('express');
const { lipaNaMpesaOnline } = require('../config/mpesa');
const paypal = require('@paypal/checkout-server-sdk');
const router = express.Router();

const Environment = paypal.core.SandboxEnvironment;
const Client = paypal.core.PayPalHttpClient;
const client = new Client(new Environment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET));

router.post('/paypal', async (req, res) => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: req.body.amount
            }
        }]
    });

    try {
        const order = await client.execute(request);
        res.json(order.result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/mpesa', async (req, res) => {
    const { phone, amount, orderId } = req.body;
    try {
        const response = await lipaNaMpesaOnline(phone, amount, orderId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
