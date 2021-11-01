/**
 * @swagger
 *  tags:
 *  name: PCR Clinics
 *  description: PCR Clinics related APIs
 */
const express = require("express");
const pcr_clinic = require("../controllers/pcr_clinic.js");
const router = express.Router();

/**
 * @swagger
 * /api/pcr_clinics:
 *  get:
 *    summary: Retrieve all pcr clinics
 *    tags: [PCR Clinics]
 *    responses:
 *      '200':
 *        description: JSON pcr clinic objects
 *      '500':
 *        description: Server error
 */
router.get("/", pcr_clinic.findAll);

/**
 * @swagger
 * /api/pcr_clinics/{clinic_id}:
 *  get:
 *    summary: Find a pcr clinic by clinic_id
 *    tags: [PCR Clinics]
 *    parameters:
 *      - in: path
 *        name: clinic_id
 *        required: true
 *    responses:
 *      '200':
 *        description: JSON pcr_clinic object
 *      '500':
 *        description: Server error
 */
router.get("/:clinic_id", pcr_clinic.findOne);


/**
 * @swagger
 * /api/pcr_clinics/search:
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
router.post("/search", pcr_clinic.search);

module.exports = router;
