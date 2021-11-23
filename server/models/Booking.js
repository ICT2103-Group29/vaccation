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

/**
 * Generate random booking id
 */
const generateBookingId = () => {
  const random = Math.floor(1000 + Math.random() * 9000);
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = ("0" + today.getHours()).slice(-2);
  const minute = ("0" + today.getMinutes()).slice(-2);
  const time = `${hour}${minute}`;
  return `VACCATION-${day}${month}-${time}-${random}`;
};

/* ============== SQL ============== */

Booking.createFlightAndBooking = (newFlight, newPayment) => {
  return new Promise((resolve, reject) => {
    let param = [];
    const bookingId = generateBookingId();
    param.push(bookingId);
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
      return resolve(bookingId);
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
  const bookingId = generateBookingId();
  booking.booking_id = bookingId;
  return collection.insertOne(booking);
};

Booking.nosqlGetDetails = async (bookingId) => {
  const collection = (await mongo).collection("booking");
  return collection.findOne({ booking_id: bookingId });
};

module.exports = Booking;
