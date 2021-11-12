/**
 * @swagger
 *  tags:
 *  name: NoSQL Booking
 *  description: NoSQL Booking related APIs
 */
const express = require("express");
const booking = require("../controllers/booking");
const router = express.Router();

/**
 * @swagger
 * /api/nosql/bookings:
 *  post:
 *    summary: Create booking
 *    tags: [NoSQL Booking]
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
 * /api/nosql/bookings/{bookingId}:
 *  get:
 *    summary: Get booking details
 *    tags: [NoSQL Booking]
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
