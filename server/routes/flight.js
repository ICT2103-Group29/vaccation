const express = require("express");
const flight = require("../controllers/flight");
const router = express.Router();

router.post("/create-session", flight.createSession);

module.exports = router;
