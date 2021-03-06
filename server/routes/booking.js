/**
 * @swagger
 *  tags:
 *  name: Booking
 *  description: Booking related APIs
 */
const express = require("express");
const booking = require("../controllers/booking");
const router = express.Router();

/**
 * @swagger
 * /api/bookings:
 *  post:
 *    summary: Create booking
 *    tags: [Booking]
 *    requestBody:
 *        required: true
 *    responses:
 *      '200':
 *        description: JSON booking object
 *      '500':
 *        description: Server error
 */
router.post("/", booking.create);

/**
 * @swagger
 * /api/bookings/{bookingId}:
 *  get:
 *    summary: Get booking details
 *    tags: [Booking]
 *    parameters:
 *      - in: path
 *        name: bookingId
 *        required: true
 *    responses:
 *      '200':
 *        description: JSON booking object
 *      '500':
 *        description: Server error
 */
router.get("/:bookingId", booking.getBookingDetails);

module.exports = router;
