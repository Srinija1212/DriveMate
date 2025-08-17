// Driver.js
// Mongoose schema for drivers

const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  licenseNumber: String,
  vehicleInfo: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Driver', driverSchema);