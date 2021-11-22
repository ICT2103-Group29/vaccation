import React from "react";
import "../../assets/css/font.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div class="max-screen h-22 mx-auto  bg-blue-800">
      <div class="flex justify-between pt-5 items-center">
        <h2 class="text-4xl text-white font-sans italic font-bold pl-12  ">
          <Link class="hover:text-white" to="/">
            Vaccation
          </Link>
        </h2>
        <ul class="flex text-xl font-semibold mr-5 mt-3">
          <li class="mr-5 " key="/">
            <Link
              class="hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/"
            >
              Home
            </Link>
          </li>
          <li class="mr-5" key="/travelRestrictions">
            <Link
              class="hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/travelRestrictions"
            >
              Travel Restrictions
            </Link>
          </li>
          <li class="mr-5">
            <Link
              class="hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/PCRClinics"
            >
              PCR Clinics
            </Link>
          </li>
          <li class="mr-5" key="/booking">
            <Link
              class="hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/booking"
            >
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
