console.log('May the node be with you');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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