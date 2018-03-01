const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});

app.use(express.static('client/src'))
// app.use(require(__dirname + '/controllers/countries_controller'))

const server = app.listen(3000, function(){
  const host = server.address().address;
  const port = server.address().port;
});
