const { Customer } = require('../models');
const httpErrors = require('http-errors');

module.exports.addCustomer = async (req, res, next) => {
    try {
    const {body} = req;
    const createdCustomer = await Customer.create(body);
    res.status(201).send(createdCustomer);
} catch (error) {
    next(error);
}
};

module.exports.deleteCustomer = async (req, res, next) => {
    try {
        const {params:{customerId}} = req;
        const count = await Customer.destroy({
            where: {id: customerId},
        });

        if (count === 0) {
            return next (httpErrors(404));
        }
        return res.status(200).send('Customer was deleted!');
} catch (error) {
    next(error);
}
};

module.exports.updateCustomer = async (req, res, next) => {
    try {
        const {params:{customerId}, body} = req;
        const result = await Customer.update(body, {
            where: {id: customerId},
        });

        if (result > 0) {
            return res.status(200).send('Customer was changed!');
        }
        return next (httpErrors(404));
} catch (error) {
    next(error);
}
};