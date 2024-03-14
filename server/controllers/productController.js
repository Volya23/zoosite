const { Product } = require ('../models');
const httpErrors = require('http-errors');

module.exports.createProduct = async(req, res, next) => {
    try {
        const {body, files} = req;
        const product = await Product.create({...body, files});
        return res.status(201).send(product);
    } catch (error) {
        next (error);
    }
}