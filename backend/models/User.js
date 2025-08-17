// User.js
// Mongoose schema for users

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isDriver: { type: Boolean, default: false },
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);