/**
 * @swagger
 *  tags:
 *  name: Flight
 *  description: Skyscanner related APIs
 */
const express = require("express");
const flight = require("../controllers/flight");
const router = express.Router();

/**
 * @swagger
 * /api/flights/search:
 *  post:
 *    summary: Search for flights from SkyScanner
 *    tags: [Flight]
 *    responses:
 *      '200':
 *        description: JSON flight objects
 *      '500':
 *        description: Server error
 */
router.post("/search", flight.search);

/**
 * @swagger
 * /api/flights/places/<country>:
 *  post:
 *    summary: Retrieve all places from SkyScanner
 *    tags: [Flight]
 *    parameters:
 *      - in: path
 *        name: country
 *        required: true
 *    responses:
 *      '200':
 *        description: JSON country objects
 *      '500':
 *        description: Server error
 */
router.get("/places/:country", flight.places);

module.exports = router;
