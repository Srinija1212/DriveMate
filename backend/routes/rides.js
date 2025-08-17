// rides.js
// Ride routes

const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

router.post('/publish', rideController.publishRide);
router.post('/book', rideController.bookRide);

module.exports = router;