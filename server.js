var path = require('path'),
    Express = require('express'),
    app = Express(),
    server;

const PATH_BUILD = path.resolve(__dirname, './build');

app.use(Express.static(PATH_BUILD));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/home.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});