console.log('May the node be with you');

const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 30000');
  console.log(__dirname);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  res.send('hello');
  
});

