var path = require('path'),
    Express = require('express'),
    app = Express(),
    router = Express.Router(),
    stormpath = require('express-stormpath'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),
    morgan = require('morgan'),
    compiler = webpack(webpackConfig),
    db = require('./lib/mongoConnector'),
    Customer = require('./models/customer'),
    server;

const PATH_BUILD = path.resolve(__dirname, './build');

db.executeConnect('mongodb://localhost/forgiftful');
app.use(morgan('combined'));

app.use(Express.static(PATH_BUILD));

//initialize with this conifguration to only use the JSON api
//add a post registration handler
//TODO: Move the handler out of this file
app.use(stormpath.init(app, {
    web: {
        spa: {
             enabled: true,
             view: path.join(__dirname, 'public', 'home.html') 
        }
    }, 
    postRegistrationHandler: function (account, req, res, next) {
        var customer = new Customer({
            name: {
                last: account.surname,
                first: account.givenName
            },
            email: account.email
        });

        customer.save(function (err, success) {
            if (err) {
                console.log('There was an error saving: ' + account.email);
            }
            res.end();
        });        
    }
}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home.html'));
});

// app.use('/api', routes.api);

app.on('stormpath.ready', function () {
    server = app.listen(process.env.PORT || 3000, () => {
        var port = server.address().port;

        console.log('Server is listening at %s', port);
    });
});

