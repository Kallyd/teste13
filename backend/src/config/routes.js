const express = require('express');

module.exports = function (server) {
    // base url for all routes
    const router = express.Router();
    server.use('/api', router);

    // routes of billing cycle
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles')

}