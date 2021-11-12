/**
 * @swagger
 *  tags:
 *  name: PCR Clinics
 *  description: PCR Clinics related APIs
 */
const express = require("express");
const pcrClinic = require("../controllers/clinic.js");
const router = express.Router();

/**
 * @swagger
 * /api/nosql/clinics:
 *  get:
 *    summary: Retrieve all pcr clinics
 *    tags: [PCR Clinics]
 *    responses:
 *      '200':
 *        description: JSON pcr clinic objects
 *      '500':
 *        description: Server error
 */
router.get("/", pcrClinic.findAll);

/**
 * @swagger
 * /api/nosql/clinics/{clinicId}:
 *  get:
 *    summary: Find a pcr clinic by clinic id
 *    tags: [PCR Clinics]
 *    parameters:
 *      - in: path
 *        name: clinicId
 *        required: true
 *    responses:
 *      '200':
 *        description: JSON pcrClinic object
 *      '500':
 *        description: Server error
 */
router.get("/:clinicId", pcrClinic.findOne);

/**
 * @swagger
 * /api/nosql/clinics/search:
 *  post:
 *    summary: Search PCR Clinics
 *    tags: [PCR Clinics]
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
 *                  search: 338 FAMILY CLINIC
 *    responses:
 *      '200':
 *        description: JSON pcr clinic(s) object
 *      '500':
 *        description: Server error
 */
router.post("/search", pcrClinic.search);

module.exports = router;
