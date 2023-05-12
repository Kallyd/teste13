const express = require('express');
const auth = require('./auth');
const billingCycle = require('../api/billingCycle/billingCycleService');



module.exports = function (server) {
    /**
     * Protected Routes by Token JWT
     */
    const protectedApi = express.Router();
    server.use('/api', protectedApi);
    // filter of authentication
    protectedApi.use(auth);

    const BillingCycle = require("../api/billingCycle/billingCycleService");
    BillingCycle.register(protectedApi, '/billingCycles');

    /**
     * Open Routes
     */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const UserService = require('../api/user/userService');
    openApi.post('/login', UserService.login); // http://localhost:3003/oapi/login
    openApi.post('/signup', UserService.signup); // http://localhost:3003/oapi/signup
    openApi.post('/validateToken', UserService.validateToken); // http://localhost:3003/oapi/validateToken
}




// module.exports = function (server) {
//     // base url for all routes
//     const router = express.Router();
//     server.use('/api', router);

//     // routes of billing cycle
//     const BillingCycle = require('../api/billingCycle/billingCycleService');
//     BillingCycle.register(router, '/billingCycles')

// }