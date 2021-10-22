/**
 * @swagger
 *  tags:
 *  name: Booking
 *  description: Country related APIs
 */
const express = require("express");
const booking = require("../controllers/booking");
const router = express.Router();

router.post("/", booking.create);

module.exports = router;
