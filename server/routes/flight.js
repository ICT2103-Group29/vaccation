const express = require("express");
const flight = require("../controllers/flight");
const router = express.Router();

router.post("/search", flight.search);

module.exports = router;
