/**
 * @swagger
 *  tags:
 *  name: Country_Vaccinated
 *  description: Country Vaccinated related APIs
 */

const express = require("express");
const country_vaccinated = require("../controllers/country_vaccinated.js");
const router = express.Router();

/**
 * @swagger
 * /api/countries_vaccinated:
 *  get:
 *    summary: Retrieve all countries vaccinated
 *    tags: [Country_Vaccinated]
 *    responses:
 *      '200':
 *        description: JSON country vaccinated objects
 *      '500':
 *        description: Server error
 */

router.get("/", country_vaccinated.findAll);

/**
 * @swagger
 * /api/countries_vaccinated/{iso}:
 *  get:
 *    summary: Find a country vaccinated by ISO
 *    tags: [Country_Vaccinated]
 *    parameters:
 *      - in: path
 *        name: iso
 *        required: true
 *    responses:
 *      '200':
 *        description: JSON country vaccinated object
 *      '500':
 *        description: Server error
 */

router.get("/:iso", country_vaccinated.findOne);

/**
 * @swagger
 * /api/countries_vaccinated/search:
 *  post:
 *    summary: Search countries vaccinated
 *    tags: [Country_Vaccinated]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                type: object
 *              properties:
 *                  search:
 *                      type: string
 *              example:
 *                  search: Singapore
 *    responses:
 *      '200':
 *        description: JSON country(s) object
 *      '500':
 *        description: Server error
 */

router.post("/search", country_vaccinated.search);

module.exports = router;