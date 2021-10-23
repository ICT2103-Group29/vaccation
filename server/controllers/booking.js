const Flight = require("../models/Flight");
const Booking = require("../models/Booking");
const Customer = require("../models/Customer");

exports.create = (req, res) => {
  const flight = new Flight({
    airline: req.body.flight.airline,
    arrivalTime: req.body.flight.arrivalTime,
    departureTime: req.body.flight.departureTime,
    departureAirport: req.body.flight.departureAirport,
    destinationAirport: req.body.flight.destinationAirport,
    flightDuration: req.body.flight.flightDuration,
    flightNumber: req.body.flight.flightNumber,
    origin: req.body.flight.origin,
    destination: req.body.flight.destination,
  });

  Booking.createFlightAndBooking(flight, (err, data) => {
    let bookingId = null;
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    bookingId = data[0][0].bookingId;
    req.body.customers.forEach((item) => {
      const cust = new Customer({
        mobileNumber: item.mobileNumber,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        passportNumber: item.passportNumber,
        nationality: item.nationality,
        placeOfIssue: item.placeOfIssue,
        expiryDate: item.expiryDate,
        dob: item.dob,
      });

      Booking.createCustomer(bookingId, cust, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Server error");
        }
      });
    });

    res
      .status(200)
      .json({ message: `Booking successful. Booking ID is ${bookingId}.` });
  });
};

exports.getBookingDetails = (req, res) => {
  Booking.getDetails(req.params.bookingId, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    res.json(data);
  });
};
