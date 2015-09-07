var http = require('http'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    server = http.createServer(app),
    path = require('path');

// app.configure(function() {
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(epxress.static(path.join(__dirname, 'public')));
//   //app.use(express.errorHandler( dumpExceptions: true, showStack: true}));
//   app.set('views', __dirname + '/views');
// });


app.get('/', function (req, res) {
  // res.send('hello world', req.path);
  res.render('index.html');
});

server.listen(port, function() {
  console.log(__dirname);
  console.log('server was loaded by ' + port);
});

// references
// list of packages https://www.npmjs.com/
// introduce the package.json https://docs.npmjs.com/files/package.json
// npm's package.json https://registry.npmjs.org/npm/latest
// express 4.x api http://expressjs.com/4x/api.html
