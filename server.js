console.log('May the node be with you');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;


var db;

MongoClient.connect('mongodb://dm1:MLdm1@ds059165.mongolab.com:59165/starwars-quotes', (err, database) => {
  // ... start the server
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  //  res.sendFile(__dirname + '/index.html');

  // this loads upon page load (which is done by app.post)
  db.collection('quotes').find().toArray((err, result) => {
    if (err) {
      return console.log(err);
    }
    res.render('index.ejs', {
      quotes: result
    });
  });

});

app.post('/quotes', (req, res) => {
  console.log('got the POST request to /quotes!');
  console.log(req.body);
  // { name: 'NODEMAN', quote: 'hello...' }

  // create 'quotes' collection; 'collection' method
  // save first entry into DB; 'save' method
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('saved to database!');

    // redirect user back to /, which causes browser to reload
    res.redirect('/');
  });
});

app.put('/quotes', (req, res) => {
// Handle put request
db.collection('quotes')
  .findOneAndUpdate({
    name: 'Yoda'
  }, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {
      _id: -1
    },
    upsert: true
  }, (err, result) => {
    if (err) {
      return res.send(err);
    }
  res.send(result);
  });
});

app.delete('/quotes', (req, res) => {
  // Handle delete event here
  db.collection('quotes')
    .findOneAndDelete({
    name: req.body.name
  }, function (err, result) {
    if (err) {
      return res.send(500, err);
    }
    res.send(result); // not in repo (was a string)
  });
  
  
  
  
  
});