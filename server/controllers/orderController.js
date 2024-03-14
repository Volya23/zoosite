const { Customer, Product, Order } = require('../models');
const httpErrors = require('http-errorss');


module.exports.getCustomerOrders = async (req, res, next) => {
    try {
    const {params: {customerId}} = req;
    const orders = await Order.findAll({
        where: {
            customerId,
        }
    });
    return res.send({data: orders});
} catch (error) {
    next(error);
}
};

module.exports.addOrderProducts = async(req, res, next) => {
    try {
        const {params: {productId}, body} = req;
        const products = body.products.map((name) => ({name, productId}));
        const createdOrders = await Order.bulkCreate(products);

        if (!createdOrders) {
            return next (httpErrors(400));
        }

        return res.send({data: createdOrders});
    } catch (error) {
        next(error);
    }
};

