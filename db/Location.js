const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
  {},
);

const Location = mongoose.model('location', locationSchema);

module.exports = Location;
