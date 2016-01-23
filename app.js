var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/static', express.static('bower_components'));

app.listen(3000, function () {
  console.log('Fake angular app started');
});
