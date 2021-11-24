import React, { useState } from "react";
import { getBookingDetails } from "../../api";
import BookingResults from "./BookingResults";

const CheckBooking = () => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") {
      setResults(null);
      return;
    }
    const res = await getBookingDetails(search);
    if (res.status === 200) setResults(res.data);
  };

  return (
    <div className="my-40">
      <h1 class="text-4xl font-bold mt-20 text-center">
        Check Your Booking Details
      </h1>
      <h3 class="text-2xl font-bold text-center text-blue-800">
        Enter your Booking ID
      </h3>
      <div class="flex justify-center items-center">
        <div class="relative flex-wrap items-stretch mb-15  m-5 px-20 w-2/3 ">
          <form onSubmit={handleSearch} class="flex">
            <input
              type="text"
              placeholder="VACCATION-xxxx-xxxx-xxxx"
              onChange={(e) => setSearch(e.target.value)}
              class="
                    px-3
                    py-3
                    placeholder-gray-400
                    text-gray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-lg
                    border border-gray-400
                    outline-none
                    focus:outline-none focus:ring
                    w-full
                    pl-10
                  "
            />
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-36 h-14 rounded ml-1 text-xl"
            >
              <i class="fas fa-search"></i>
              <span class="text-lg ml-2">Search</span>
            </button>
          </form>
        </div>
      </div>
      {results && <BookingResults data={results} />}
    </div>
  );
};

export default CheckBooking;
