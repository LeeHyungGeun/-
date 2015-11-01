var express = require('express'),
    skipper = require('skipper');

var app = express();
var port = 8000;

app.post('/upload', skipper());
app.post('/upload', function (req, res) {
  var body = req.body || {};

  req.file('file').upload({
    dirname: __dirname + body.dirname,
    saveAs: body.fileName
  }, function (err, uploadedFiles) {
    if (err) {
      console.log(err.toString());
      return res.status(500).send(err.toString());
    } else {
      return res.send('successfully!');
    }
  });
});

app.listen(port, function () {
  port = (port !== '80' ? ':' + port : '');
  var url = 'http://localhost' + port + '/';
  console.log('Running at ' + url);
});
