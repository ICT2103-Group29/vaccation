const Flight = require("../models/Flight");
const Booking = require("../models/Booking");

exports.create = (req, res) => {
  const flight = new Flight({
    airline: req.body.airline,
    arrivalTime: req.body.arrivalTime,
    departureTime: req.body.departureTime,
    departureAirport: req.body.departureAirport,
    destinationAirport: req.body.destinationAirport,
    flightDuration: req.body.flightDuration,
    flightNumber: req.body.flightNumber,
    origin: req.body.origin,
    destination: req.body.destination,
  });

  Booking.create(flight, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};
