const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/');
});

app.use(express.static('client/src'))

const server = app.listen(3000, function(){
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});





//
//
// const express     = require('express');
// const parser      = require('body-parser');
// const server      = express();
// const MongoClient = require('mongodb').MongoClient
// const ObjectID    = require('mongodb').ObjectID
//
// server.use(parser.json());
// server.use(express.static('client/build'));
// server.use(parser.urlencoded({extended: true}));
//
// MongoClient.connect('mongodb://localhost:27017', function(err, client){
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   const db = client.db('bucket_list');
//   console.log('Connected to database');
//
//
//
// //CREATE - POST
// server.post('/api/list', function(req, res){
//   const listCollection = db.collection('list');
//   const listToSave      = req.body; //this is the request sent to the server which we wait for the response
//
//   listCollection.save(listToSave, function(err, result){
//     if (err) {
//       console.log(err);
//       res.status(500); //this is the RESPONSES status, 500 as it is server side
//       res.send();
//     }
//     res.status(201); //for adding one, 200 otherwise
//     res.json(result.ops[0]);
//     console.log('saved to database');
//   })
// })
//
//
// //INDEX/READ - GET
// server.get('/api/list', function(req, res){
//   const listCollection = db.collection('list');
//
//   listCollection.find().toArray(function(err, allList){
//     if (err) {
//       console.log(err);
//       res.status(500)
//       res.send();
//     }
//     res.json(allList);
//   })
// })
//
// server.listen(3000, function(){
//     console.log("Listening on port 3000");
//   });
//
// })
