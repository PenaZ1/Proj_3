const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    email: 'string',
    password: 'string',
  },
);

module.exports = User;
