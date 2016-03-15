var path = require('path'),
    Express = require('express'),
    app = Express(),
    router = Express.Router(),
    stormpath = require('express-stormpath'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),
    morgan = require('morgan'),
    compiler = webpack(webpackConfig),
    server;

const PATH_BUILD = path.resolve(__dirname, './build');

app.use(morgan('combined'));
//NOTE: dont know if i will need this or not
// app.use(require('webpack-dev-middleware')(compiler), {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath
// });

app.use(Express.static(PATH_BUILD));

//initialize with this conifguration to only use the JSON api
app.use(stormpath.init(app, {
    web: {
        produces: ['application/json']
    }
}));

//NOTE: might use this configuration in the future
// spa: {
//      enabled: true,
//      view: path.join(__dirname, 'public', 'index.html') 
// }
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home.html'));
});
// router.post('/register',)

// send all requests to index.html so browserHistory works
// app.get('*', (req, res) => {
//   match({ routes, location: req.url }, (err, redirect, props) => {
//     if (err) {
//       res.status(500).send(err.message);
//     } else if (redirect) {
//       res.redirect(redirect.pathname + redirect.search);
//     } else if (props) {
//       // hey we made it!
//       const appHtml = renderToString(<RouterContext {...props}/>);
//       res.send(renderPage(appHtml));
//     } else {
//       res.status(404).send('Not Found');
//     }
//   });
// });

// function renderPage(appHtml) {
//   return `
//     <html>
// <head>
// <meta charset="utf-8">
// </head>
// <body>
// <section id="app">
// </section>
// <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
// </body>
// </html>
//    `
// }
app.on('stormpath.ready', function () {
    server = app.listen(process.env.PORT || 3000, () => {
        var port = server.address().port;

        console.log('Server is listening at %s', port);
    });
});

