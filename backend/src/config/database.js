const mongoose = require('mongoose');
const env = require('../.env');
mongoose.Promise = global.Promise;

const url = env.mongoURL ? env.mongoURL : 'mongodb//localhost/mymoney';



mongoose.Error.messages.general.required = "The attribute '{PATH}' is required..";
mongoose.Error.messages.Number.min = "The '{VALUE} informed is less than the minimum limit of '{MIN}'.";
mongoose.Error.messages.Number.max = "The '{VALUE} informed is greater than the maximum limit of '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE}' not valid for attribute '{PATH}'."

module.exports = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// module.exports = mongoose.connect('mongodb://localhost/mymoney', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
