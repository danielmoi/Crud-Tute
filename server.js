console.log('May the node be with you');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds059165.mongolab.com:59165/starwars-quotes', (err, database) => {
  // ... start the server
})


app.use(bodyParser.urlencoded({
  extended: true
}
));

app.listen(3000, function () {
  console.log('listening on 30000');
  console.log(__dirname);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');

});

app.post('/quotes', (req, res) => {
  console.log('got the POST request to /quotes!');
  console.log(req.body);
  // { name: 'NODEMAN', quote: 'hello...' }
});