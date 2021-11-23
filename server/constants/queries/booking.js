const CREATE_FLIGHT_BOOKING = "CALL Create_Booking(?)";
const CREATE_CUSTOMER = "CALL Create_Customer(?)";

const SELECT_BOOKING_DETAILS = `SELECT 
B.booking_id, B.booking_date, 
PM.amount,
C.*,
P.nationality, P.place_of_issue, P.expiry_date, P.dob,
F.*
FROM customer_booking CB
JOIN customer C ON C.user_id = CB.user_id
JOIN passport P ON P.passport_number = C.passport
JOIN booking B ON B.booking_id = CB.booking_id
JOIN payment PM ON B.booking_id = PM.booking_id
JOIN flight F ON F.flight_id = B.flight_id
WHERE B.booking_id = ?`;

module.exports = Object.freeze({
  CREATE_FLIGHT_BOOKING,
  CREATE_CUSTOMER,
  SELECT_BOOKING_DETAILS,
});
