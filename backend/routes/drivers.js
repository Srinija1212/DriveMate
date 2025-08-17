// drivers.js
// Driver routes

const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.post('/register', driverController.registerDriver);
router.post('/book', driverController.bookDriver);

module.exports = router;