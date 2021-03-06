const Flight = require("../models/Flight");
const Booking = require("../models/Booking");
const Customer = require("../models/Customer");
const Payment = require("../models/Payment");

/* ============== SQL ============== */

exports.create = async (req, res) => {
  try {
    const flight = new Flight(req.body.flight);
    const payment = new Payment(req.body.payment);

    const result = await Booking.createFlightAndBooking(flight, payment);
    const bookingId = result;

    req.body.customers.forEach(async (item) => {
      const cust = new Customer(item);
      await Booking.createCustomer(bookingId, cust);
    });

    res.status(200).json({ bookingId });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

exports.getBookingDetails = async (req, res) => {
  try {
    const data = await Booking.getDetails(req.params.bookingId);
    let cleanedData = {
      booking: {},
      flight: {},
      customers: [],
    };

    data.map((item) => {
      if (Object.keys(cleanedData.booking).length === 0) {
        cleanedData.booking = {
          bookingId: item.booking_id,
          bookingDate: item.booking_date,
          price: item.amount,
        };
      }

      if (Object.keys(cleanedData.flight).length === 0) {
        cleanedData.flight = {
          airline: item.airline,
          arrivalTime: item.arrival_time,
          departureTime: item.departure_time,
          departureAirport: item.departure_airport,
          destinationAirport: item.destination_airport,
          flightDuration: item.flight_duration,
          flightNumber: item.flight_number,
          origin: item.origin,
          destination: item.destination,
        };
      }

      cleanedData.customers.push({
        userId: item.user_id,
        firstName: item.first_name,
        lastName: item.last_name,
        email: item.email,
        mobileNumber: item.mobile_number,
        passportNumber: item.passport,
        nationality: item.nationality,
        placeOfIssue: item.place_of_issue,
        expiryDate: item.expiry_date,
        dob: item.dob,
      });
    });

    res.json(cleanedData);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

/* ============== NoSQL ============== */

exports.nosqlCreate = async (req, res) => {
  try {
    let booking = {
      flight: {},
      payment: {},
      customers: [],
    };

    booking.flight = new Flight(req.body.flight);
    booking.payment = new Payment(req.body.payment);
    for (const customer of req.body.customers) {
      const cust = new Customer(customer);
      booking.customers.push({
        mobileNumber: cust.mobileNumber,
        firstName: cust.firstName,
        lastName: cust.lastName,
        email: cust.email,
        passport: {
          passportNumber: cust.passportNumber,
          nationality: cust.nationality,
          placeOfIssue: cust.placeOfIssue,
          expiryDate: cust.expiryDate,
          dob: cust.dob,
        },
      });
    }
    const bookingId = await Booking.nosqlCreate(booking);
    res.status(200).json({
      message: `Booking successful. Booking ID is ${bookingId}.`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

exports.nosqlGetBookingDetails = async (req, res) => {
  try {
    const data = await Booking.nosqlGetDetails(req.params.bookingId);
    res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};
