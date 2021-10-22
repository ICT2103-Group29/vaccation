const sql = require("../config/mysql");
const query = require("../constants/queries/booking");

const Booking = () => {};

Booking.create = (newFlight, result) => {
  let param = [];
  for (const key in newFlight) {
    if (newFlight.hasOwnProperty(key)) {
      param.push(newFlight[key]);
    }
  }
  sql.query(query.CREATE_FLIGHT_BOOKING, [param], (err, res) => {
    if (err) {
      console.error("error:", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Booking;
