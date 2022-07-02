const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const specificRoute = require('./routes/info.js')
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('public'));

/** ---------- ROUTES ---------- **/
app.use('/api/specificRoute', specificRoute);

// listen on the port
app.listen(port, () => {
  console.log(`App listening on ${port}`);
 });