var mongoose = require('mongoose'),
    Customer = require('../models/customer');


//TODO: Make a response controller
module.exports.subscribe = function (req, res, next) {
    var email = req.body.email,
        subscription = req.body.subscription;

    Customer.findOne({email: email}, function (err, customer) {
        customer.subscriptions.push(subscription);
        customer.save(function (err, success) {
            if (err) {
                console.log('There was an error saving: ' + account.email);
            }
            res.end();
        })
    })
}