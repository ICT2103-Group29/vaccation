const sql = require("../config/mysql");
const query = require("../constants/queries/booking");

class Booking {
  constructor(booking) {
    this.bookingId = booking.bookingId;
  }
}

Booking.createFlightAndBooking = (newFlight, result) => {
  let param = [];
  for (const key in newFlight) {
    if (newFlight.hasOwnProperty(key)) {
      param.push(newFlight[key]);
    }
  }
  sql.query(query.CREATE_FLIGHT_BOOKING, [param], (err, res) => {
    if (err) {
      console.error("error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Booking.createCustomer = (bookingId, newCust, result) => {
  let param = [];
  param.push(bookingId);

  for (const key in newCust) {
    if (newCust.hasOwnProperty(key)) {
      param.push(newCust[key]);
    }
  }
  sql.query(query.CREATE_CUSTOMER, [param], (err, res) => {
    if (err) {
      console.error("error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Booking.getDetails = (bookingId, result) => {
  sql.query(query.SELECT_BOOKING_DETAILS, bookingId, (err, res) => {
    if (err) {
      console.error("error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Booking;
