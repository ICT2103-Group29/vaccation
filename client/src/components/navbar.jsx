import React from "react";
import "../assets/font.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div class=" max-screen h-28 mx-auto  bg-blue-800">
      <Router>
        <div class="flex pt-11 justify-between">
          <h2 class="text-4xl text-white font-bold pl-12  ">Vaccation</h2>
          <ul class=" flex text-2xl font-semibold ">
            <li class="mr-5 ">
              <Link to="">Home</Link>
            </li>
            <li class="mr-5">
              <Link to="/travelRestrictions">Travel Restrictions</Link>
            </li>
            <li class="mr-5">
              <Link to="/PCRClinics">PCR Clinics</Link>
            </li>
            <li class="mr-5">
              <Link to="/searchFlights">Booking</Link>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
