const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./user'); // user schema
const env = require('../../.env');

// regex to validade email and password
const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

// method to treat bd errors
const sendErrorsFromDB = (res, dbErrors) => {
    const errors = [];
    _.forIn(dbErrors.errors, error => errors.push(error.message));
    return res.status(400).json({ errors });
}

const login = (req, res, next) => {
    const email = req.body.email || '';
    const password = req.body.password || '';
    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err);
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user, env.authSecret, {
                expiresIn: "1 day"
            })
            const { name, email } = user;
            res.json({ name, email, token })
        } else {
            return res.status(400).send({ errors: ['Username/Password invalid'] })
        }
    })
}

const validateToken = (req, res, next) => {
    const token = req.body.token || '';
    jwt.verify(token, env.authSecret, function (err, decoded) {
        return res.status(200).send({ valid: !err })
    })
}

const signup = (req, res, next) => {
    // data passed by the forms
    const name = req.body.name || '';
    const email = req.body.email || '';
    const password = req.body.password || '';
    const confirmPassword = req.body.confirm_password || '';

    // validating email
    if (!email.match(emailRegex)) {
        return res.status(400).send({ errors: ['The email provided is not valid'] })
    }

    // validating password
    if (!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                "Password must have: one uppercase letter, one lowercase letter, one number, one special character (@#$%) and length between 6-20."
            ]
        })
    }

    // generating password hash
    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);
    // validating password with hash
    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({ errors: ['Passwords do not match'] })
    }

    // checking if user exists in database
    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err);
        } else if (user) {
            return res.status(400).send({ errors: ['User already registered'] })
        } else {
            // if user not exists, we will save in the database
            const newUser = new User({ name, email, password: passwordHash });
            newUser.save(err => {
                if (err) {
                    return sendErrorsFromDB(res, err);
                } else {
                    login(req, res, next)
                }
            })
        }
    })
}

module.exports = { login, signup, validateToken }