const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

BillingCycle.methods(['get', 'post', 'put', 'delete'])
// criando validações e fazendo com que volte o valor atualizado em vez do antigo
BillingCycle.updateOptions({
    new: true,
    runValidators: true
});
// interceptação usando o mdd que criamos para os erros ficarem padronizados
BillingCycle.after('post', errorHandler).after('put', errorHandler);

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((err, value) => {
        if (err) {
            res.status(500).json({ errors: [err] })
        } else {
            res.json({ value })
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
        $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    }, {
        $project: { _id: 0, credit: 1, debt: 1 }
    }], (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

// BillingCycle.route('get', (req, res, next) => {
//     BillingCycle.find({}, (err, docs) => {
//         if (!err) {
//             res.json(docs);
//         } else {
//             res.statur(500).json({ errors: [error] })
//         }
//     })
// })

module.exports = BillingCycle
