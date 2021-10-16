const express = require("express");
const country = require("../controllers/country.js");

const router = express.Router();

/* Retrieve all countries */
router.get("/", country.findAll);

router.get("/:iso", country.findOne);

module.exports = router;
