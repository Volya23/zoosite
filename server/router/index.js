const rootRouter = require('express').Router();
const customerRouter = require('./customerRouter');
/*const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');
const categoryRouter = require('./categoryRouter');*/

rootRouter.use('/customers', customerRouter);
/*rootRouter.use('/products', productRouter);
rootRouter.use('/orders', orderRouter);
rootRouter.use('/categories', categoryRouter);*/


module.exports = rootRouter;