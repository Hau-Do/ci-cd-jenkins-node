var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World 222");
});

app.listen(4000);