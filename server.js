var path = require('path'),
    Express = require('express'),
    app = Express(),
    server;

const PATH_BUILD = path.resolve(__dirname, './build');

app.use(Express.static(PATH_BUILD));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/home.html'));
});

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
//     <!doctype html public="storage">
//     <html>
//     <meta charset=utf-8/>
//     <title>My First React Router App</title>
//     <link rel=stylesheet href=/index.css>
//     <div id=app>${appHtml}</div>
//     <script src="/bundle.js"></script>
//    `
// }

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});