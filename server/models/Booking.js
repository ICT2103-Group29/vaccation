const sql = require("../config/mysql");
const connectMongoDB = require("../config/mongodb");
const query = require("../constants/queries/booking");
const { ObjectId } = require("bson");

const mongo = connectMongoDB();
class Booking {
  constructor(booking) {
    this.bookingId = booking.bookingId;
  }
}

/* ============== SQL ============== */

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
    param.push(bookingId);
    for (const key in newCust) {
      if (newCust.hasOwnProperty(key)) {
        param.push(newCust[key]);
      }
    }

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

/* ============== NoSQL ============== */

Booking.nosqlCreate = async (booking) => {
  const collection = (await mongo).collection("booking");
  return collection.insertOne(booking);
};

Booking.nosqlGetDetails = async (bookingId) => {
  const collection = (await mongo).collection("booking");
  const id = ObjectId(bookingId);
  return collection.findOne({ _id: id });
};

module.exports = Booking;
