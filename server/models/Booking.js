const sql = require("../config/mysql");
const query = require("../constants/queries/booking");

class Booking {
  constructor(booking) {
    this.bookingId = booking.bookingId;
  }
}

Booking.createFlightAndBooking = (newFlight, newPayment) => {
  return new Promise((resolve, reject) => {
    let param = [];
    for (const key in newFlight) {
      if (newFlight.hasOwnProperty(key)) {
        param.push(newFlight[key]);
      }
    }

    for (const key in newPayment) {
      if (newPayment.hasOwnProperty(key)) {
        param.push(newPayment[key]);
      }
    }

    sql.query(query.CREATE_FLIGHT_BOOKING, [param], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Booking.createCustomer = (bookingId, newCust) => {
  return new Promise((resolve, reject) => {
    let param = [];
    for (const key in newCust) {
      if (newCust.hasOwnProperty(key)) {
        param.push(newCust[key]);
      }
    }
    param.push(bookingId);
    sql.query(query.CREATE_CUSTOMER, [param], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Booking.getDetails = (bookingId) => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_BOOKING_DETAILS, bookingId, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

module.exports = Booking;
