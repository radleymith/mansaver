var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CustomerSchema = new Schema({
        email: {type: String, required: true},
        name: {
            last: {type: String, required: true},
            first: {type: String, required: true}
        },
        subscriptions: [{          
            name: {
                last: {type: String, required: true},
                first: {type: String, required: true}
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
        }]
    }),
    Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;