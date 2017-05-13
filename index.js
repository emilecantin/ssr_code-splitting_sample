// server.js
const express = require('express');
const app = express();
app.use(express.static('build'));

const {render} = require('./build/server.js');

app.use(render);


app.listen(5000);
