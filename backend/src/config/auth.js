// Middleware to filter the authTOken that we created be the only one permited
const jwt = require('jsonwebtoken');
const env = require('../.env');

module.exports = (req, res, next) => {
    // CORS preflight request
    if (req.method === 'OPTIONS') {
        next();
    } else {
        // places where the token can be retrived
        const token = req.body.token || req.query.token || req.headers['authorization'];
        if (!token) {
            return res.status(403).send({ errors: ['No token provided.'] });
        }

        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                return res.status(404).send({
                    errors: ['Failed to authenticate token.']
                })
            } else {
                // req.decoded = decoded;
                next();
            }
        })
    }
}