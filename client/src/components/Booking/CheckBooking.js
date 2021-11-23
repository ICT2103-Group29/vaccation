import React, { useState } from "react";
import BookingResults from "./BookingResults";

const CheckBooking = () => {
  const [search, setSearch] = React.useState("");
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-40">
      <h1 className="text-4xl text-center pt-10 text-blue-900">
        <b>Check Your Booking</b>
      </h1>
      <p className="text-3xl text-center text-bold text-gray-800">
        Enter Your Email Address
      </p>
      <div class="flex justify-center items-center">
        <div class="relative flex-wrap items-stretch mb-15  m-5 px-20 w-2/3 ">
          <form onSubmit={handleSearch} class="flex">
            <input
              type="text"
              placeholder="Email Address"
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
      <BookingResults />
    </div>
  );
};

export default CheckBooking;
