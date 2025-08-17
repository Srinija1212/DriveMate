// Ride.js
// Mongoose schema for rides

const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  date: Date,
  seatsAvailable: Number,
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Add more fields as needed
});

module.exports = mongoose.model('Ride', rideSchema);