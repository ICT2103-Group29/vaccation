/**
 * @swagger
 *  tags:
 *  name: Country
 *  description: Country related APIs
 */
const express = require("express");
const country = require("../controllers/country.js");
const router = express.Router();

/**
 * @swagger
 * /api/countries:
 *  get:
 *    summary: Retrieve all countries
 *    tags: [Country]
 *    responses:
 *      '200':
 *        description: JSON country objects
 *      '500':
 *        description: Server error
 */
router.get("/", country.findAll);

/**
 * @swagger
 * /api/countries/{iso}:
 *  get:
 *    summary: Find a country by ISO
 *    tags: [Country]
 *    parameters:
 *      - in: path
 *        name: iso
 *        required: true
 *    responses:
 *      '200':
 *        description: JSON country object
 *      '500':
 *        description: Server error
 */
router.get("/:iso", country.findOne);

module.exports = router;
