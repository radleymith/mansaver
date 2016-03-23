var mongoose = require('mongoose'),

    db = {
        executeConnect: function (conf) {
            mongoose.connect(conf);
            var db = mongoose.connection;

            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open woot woot get dem thangs');
            });
        }
    };

module.exports = db;