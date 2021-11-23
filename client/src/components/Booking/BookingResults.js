import React from "react";
import { Link } from "react-router-dom";

const BookingResults = () => {
  return (
    <div className="rounded-lg shadow-md h-auto text-center p-10 m-12 bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b text-md text-blue-900">
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
            <th className="uppercase">Ticket Type</th>
            <th className="uppercase">Quantity</th>
            <th className="uppercase">Price (SGD)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Link to="#" className="text-blue-500 font-semibold">
                VACCATION-1234-4321
              </Link>
            </td>
            <td className="font-semibold">November 20, 2021 00:53</td>
            <td className="py-6">
              <div className="grid grid-cols-2">
                <div className="font-bold">
                  <span>FROM</span>
                </div>
                <div>
                  <p className="my-0 uppercase text-md font-bold">
                    Singapore (SG)
                  </p>
                  <p className="my-0 text-sm text-gray-600 font-semibold">
                    November 30, 2021
                  </p>
                  <p className="my-0 uppercase text-xs">21:00 (SGT)</p>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4">
                <div className="font-bold">
                  <span>TO</span>
                </div>
                <div>
                  <p className="my-0 uppercase text-md font-bold">Italy (IT)</p>
                  <p className="my-0 text-sm text-gray-600 font-semibold">
                    November 30, 2021
                  </p>
                  <p className="my-0 text-xs">07:00 (CET)</p>
                </div>
              </div>
            </td>
            <td className="uppercase font-semibold text-purple-500">
              One way ticket
            </td>
            <td className="text-lg font-semibold">2</td>
            <td className="text-lg font-semibold">2609.10</td>
          </tr>
          <tr>
            <td>
              <Link to="#" className="text-blue-500 font-semibold">
                VACCATION-1234-4321
              </Link>
            </td>
            <td className="font-semibold">November 20, 2021 00:53</td>
            <td className="py-6">
              <div className="grid grid-cols-2">
                <div className="font-bold">
                  <span>FROM</span>
                </div>
                <div>
                  <p className="my-0 uppercase text-md font-bold">
                    Singapore (SG)
                  </p>
                  <p className="my-0 text-sm text-gray-600 font-semibold">
                    November 30, 2021
                  </p>
                  <p className="my-0 uppercase text-xs">21:00 (SGT)</p>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4">
                <div className="font-bold">
                  <span>TO</span>
                </div>
                <div>
                  <p className="my-0 uppercase text-md font-bold">Italy (IT)</p>
                  <p className="my-0 text-sm text-gray-600 font-semibold">
                    November 30, 2021
                  </p>
                  <p className="my-0 text-xs">07:00 (CET)</p>
                </div>
              </div>
            </td>
            <td className="uppercase font-semibold text-yellow-500">
              Two way ticket
            </td>
            <td className="text-lg font-semibold">2</td>
            <td className="text-lg font-semibold">2609.10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingResults;
