const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lat: { type: String, required: true },
    lng: { type: String, required: true },
  },
);

const Location = mongoose.model('location', locationSchema);

module.exports = Location;
