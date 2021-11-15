/**
 * @swagger
 *  tags:
 *  name: NoSQL Country
 *  description: NoSQL Country related APIs
 */
const express = require("express");
const country = require("../controllers/country.js");
const countryVacc = require("../controllers/countryVacc.js");
const router = express.Router();

/**
 * @swagger
 * /api/nosql/countries:
 *  get:
 *    summary: Retrieve all countries
 *    tags: [NoSQL Country]
 *    responses:
 *      '200':
 *        description: JSON country objects
 *      '500':
 *        description: Server error
 */
router.get("/", country.nosqlFindAll);

/**
 * @swagger
 * /api/nosql/countries/open:
 *  get:
 *    summary: Retrieve percentage of countries that are open with restrictions
 *    tags: [NoSQL Country]
 *    responses:
 *      '200':
 *        description: JSON objects
 *      '500':
 *        description: Server error
 */
router.get("/open", country.nosqlGetOpenWithRestrictions);

/**
 * @swagger
 * /api/nosql/countries/worldwide/vacc:
 *  get:
 *    summary: Retrieve percentage of countries that are vaccinated world wide
 *    tags: [NoSQL Country]
 *    responses:
 *      '200':
 *        description: JSON object
 *      '500':
 *        description: Server error
 */
router.get("/worldwide/vacc", country.nosqlGetWorldwideVaccPercent);

/**
 * @swagger
 * /api/nosql/countries/vacc:
 *  get:
 *    summary: Retrieve all countries vaccinated
 *    tags: [NoSQL Country]
 *    responses:
 *      '200':
 *        description: JSON country vaccinated objects
 *      '500':
 *        description: Server error
 */

router.get("/vacc", countryVacc.nosqlFindAll);

/**
 * @swagger
 * /api/nosql/countries/restrictions/{iso}:
 *  get:
 *    summary: Get a country's restrictions
 *    tags: [NoSQL Country]
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
router.get("/restrictions/:iso", country.nosqlGetRestrictions);

/**
 * @swagger
 * /api/nosql/countries/vacc/{iso}:
 *  get:
 *    summary: Find a country vaccinated by ISO
 *    tags: [NoSQL Country]
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

router.get("/vacc/:iso", countryVacc.nosqlFindOne);

/**
 * @swagger
 * /api/nosql/countries/{iso}:
 *  get:
 *    summary: Find a country by ISO
 *    tags: [NoSQL Country]
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
router.get("/:iso", country.nosqlFindOne);

/**
 * @swagger
 * /api/nosql/countries/search:
 *  post:
 *    summary: Search countries
 *    tags: [NoSQL Country]
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
router.post("/search", country.nosqlSearch);

/**
 * @swagger
 * /api/nosql/countries/vacc/search:
 *  post:
 *    summary: Search countries vaccinated
 *    tags: [NoSQL Country]
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

router.post("/vacc/search", countryVacc.nosqlSearch);

module.exports = router;
