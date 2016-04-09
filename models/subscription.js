//made this but not sure i want to add it to customer... yet

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SubscriptionSchema = new Schema({
        customerId: String,
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
            shirtSize: Number,
            pantSize: Number,
            comments: String,
            likes: String
        }
    }),
    Subscription = mongoose.model('subscription', SubscriptionSchema);

module.exports = Subscription;
