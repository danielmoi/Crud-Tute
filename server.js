console.log('May the node be with you');

const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000');
  console.log(__dirname);
});

app.get('/', (req, res) => {
  res.send(__dirname + '/index.html');
});

