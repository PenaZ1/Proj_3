/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const populateLocationSchema = require('./db/populateLocationSchema');
const Location = require('./db/Location');

mongoose.connect('mongodb://root:password1@ds139327.mlab.com:39327/heroku_fkz46j96', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (error) => {
  // eslint-disable-next-line no-console
  console.log(`Problem connection to the database${error}`);
});

Location.count({}, (err, res) => {
  if (err) throw err;
  if (res === 0) {
    populateLocationSchema();
  }
});

const routes = require('./routes');
const corsOptions = require('./config/cors.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port: ${PORT}`);
});

process.on('SIGTERM', () => {
  app.close();
});

process.on('exit', () => {
  app.close();
});

module.exports = app;
