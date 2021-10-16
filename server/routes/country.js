const express = require("express");
const country = require("../controllers/country.js");

const router = express.Router();

/* Retrieve all countries */
router.get("/", country.findAll);

module.exports = router;
