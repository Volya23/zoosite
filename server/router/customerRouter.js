const customerRouter = require('express').Router({ mergeParams:true});

//const orderRouter = require('./orderRouter');

const CustomerController = require('../controllers/customerController');

    customerRouter
    .route('/')
    .post(CustomerController.addCustomer);

    customerRouter
    .route('/:customerId')
    .put(CustomerController.updateCustomer)
    .delete(CustomerController.deleteCustomer);

//customerRouter.use('/:userId/orders', orderRouter);

module.exports = customerRouter;