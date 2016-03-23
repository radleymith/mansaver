var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CustomerSchema = new Schema({
        sharedId: String,
        subscriptions: [{
            person: {
                name: {
                    last: String,
                    first: String
                },
                gender: Number,
                dates: [{
                    name: String,
                    date: Date
                }],
                pricePer: Number,
                totalAmount: Number,
                shirtSize: Number,
                pantSize: Number,
                comments: String,
                likes: String
            }
        }]
    }),
    Customer = mongoose.model('customer', CustomerSchema);

module.exports.CustomerSchema = CustomerSchema;
module.exports.Customer = Customer;