import React from "react";

const BookingResults = ({ data }) => {
  const { booking, flight, customers } = data;

  const getFormattedDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const getFormattedTime = (date) => {
    const newDate = new Date(date);
    const hours = ("0" + newDate.getHours()).slice(-2);
    const minutes = ("0" + newDate.getMinutes()).slice(-2);
    return `${hours}:${minutes}H`;
  };

  return (
    <div className="rounded-lg shadow-md h-auto text-center p-10 m-12 bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b text-md text-blue-800">
            <th className="uppercase">Booking ID</th>
            <th className="uppercase">Booking Date</th>
            <th className="uppercase">
              <div className="flex justify-center">
                <span>Departure</span>{" "}
                <svg
                  className="w-6 h-6 px-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>{" "}
                <span>Destination</span>
              </div>
            </th>
            <th className="uppercase">Airline</th>
            <th className="uppercase">Quantity</th>
            <th className="uppercase">Price (SGD)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className=" font-semibold">{booking.bookingId}</td>
            <td className="font-semibold">
              {`${getFormattedDate(booking.bookingDate)} ${getFormattedTime(
                booking.bookingDate
              )}`}
            </td>
            <td className="py-6">
              <div className="grid grid-cols-2">
                <div className="font-bold">
                  <span>FROM</span>
                </div>
                <div>
                  <p className="my-0 uppercase text-md font-bold">
                    {flight.departureAirport}
                  </p>
                  <p className="my-0 text-sm text-blue-800 font-semibold">
                    {getFormattedDate(flight.departureTime)}
                  </p>
                  <p className="my-0 uppercase font-semibold text-xs">
                    {getFormattedTime(flight.departureTime)}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-">
                <div className="font-bold">
                  <span>TO</span>
                </div>
                <div>
                  <p className="my-0 uppercase text-md font-bold">
                    {flight.arrivalAirport}
                  </p>
                  <p className="my-0 text-sm text-blue-800 font-semibold">
                    {getFormattedDate(flight.arrivalTime)}
                  </p>
                  <p className="my-0 text-xs  font-semibold">
                    {getFormattedTime(flight.arrivalTime)}
                  </p>
                </div>
              </div>
            </td>
            <td className="uppercase font-semibold text-blue-800">
              {flight.airline}
            </td>
            <td className="text-lg font-semibold">{customers.length}</td>
            <td className="text-lg font-semibold">
              {booking.price.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingResults;
