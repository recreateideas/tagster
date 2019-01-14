const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./routes')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen('5011');

console.log(`Listening on localhost, port: 5011`);
