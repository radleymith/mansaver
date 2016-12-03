var path = require('path'),
    Express = require('express'),
    app = Express(),
    bodyParser = require('body-parser'),
    webpack = require('webpack'),
    port = process.env.PORT || 8000,
    morgan = require('morgan'),
    webpackConfig = require('./webpack.hot.config'),
    compiler = webpack(webpackConfig),
    server;



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home.html'));
});

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo:true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.listen(port, function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log('[%s] Listening on http://localhost:%d', app.setting.env.toUpperCase(), port);
    }
})