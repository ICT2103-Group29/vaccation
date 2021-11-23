import React, { useState } from "react";
import "../../assets/css/font.css";

import LargeCard from "../Shared/LargeCard";
import { Button } from "antd";
import "../../assets/css/button.css";

import { Form, Select, DatePicker } from "antd";
import { Link } from "react-router-dom";

function HowToNavigate() {
  return (
    <div>
      <h2 class=" text-4xl font-bold text-center pt-10 ">How to Navigate</h2>
      <div class=" grid grid-cols-4 gap-10 pb-20 px-10 mt-20">
        <div class="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 rounded p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Link to="travelRestrictions">
            <div class="flex justify-center items-center">
              <div class="bg-blue-900 rounded-full h-32 w-32 m-3 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center text-white font-bold">
              Step 1 - Restrictions
            </h3>
            <p class="text-center text-white text-sm font-medium">
              Vaxx-citing times are here! You can now travel between Singapore
              and the VTL countries.
            </p>
          </Link>
        </div>

        <div class="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500  p-3 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Link to="PCRClinics">
            <div class="flex justify-center items-center">
              <div class="bg-blue-900 rounded-full h-32 w-32 m-3 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center text-white font-bold">
              Step 2 - PCR Testing
            </h3>
            <p class="text-center text-white text-sm font-medium">
              Find out the pre-departure COVID-19 test locations!
            </p>
          </Link>
        </div>

        <div class="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500  p-3 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Link to="booking">
            <div class="flex justify-center items-center">
              <div class="bg-blue-900 rounded-full h-32 w-32 m-3 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center text-white font-bold">
              Step 3 - Book Flight
            </h3>
            <p class="text-center text-white text-sm font-medium">
              Ready to depart? Book your flight with Vaccation!
            </p>
          </Link>
        </div>

        <div class="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500  p-3 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Link to="checkBooking">
            <div class="flex justify-center items-center">
              <div class="bg-blue-900 rounded-full h-32 w-32 m-3 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center text-white font-bold">
              Step 4 - Check Bookings
            </h3>
            <p class="text-center text-white text-sm font-medium">
              Unsure what time to depart? Don't worry, Vaccation got you
              covered. <br />
              Check your booking details here.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowToNavigate;
