const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb//localhost/mymoney';



mongoose.Error.messages.general.required = "The attribute '{PATH}' is required..";
mongoose.Error.messages.Number.min = "The '{VALUE} informed is less than the minimum limit of '{MIN}'.";
mongoose.Error.messages.Number.max = "The '{VALUE} informed is greater than the maximum limit of '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE}' not valid for attribute '{PATH}'."

module.exports = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// module.exports = mongoose.connect('mongodb+srv://angelinaPierre:Gaptp95123@mymoney-backend.s8lxav6.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true
// });

// module.exports = mongoose.connect('mongodb://localhost/mymoney', {
//     useNewUrlParser: true
// });
