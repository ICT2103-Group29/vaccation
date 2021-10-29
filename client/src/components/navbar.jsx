import React from "react";

import "../assets/font.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Link } from "react-router-dom";

// const navigation = [
//   { name: "Home", href: "./home", current: true },
//   { name: "Travel Restrictions", href: "#", current: false },
//   { name: "PCR Clinics", href: "#", current: false },
//   { name: "Booking", href: "#searchFlights", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const Navbar = (props) => {
  return (
    <div class=" max-screen h-28 mx-auto  bg-blue-800">
      {/* <div class="">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "text-white font-bold"
                  : "text-gray-300  hover:text-white hover: font-bold",
                "px-4 py-2  font-normal  text-xl"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div> */}
      <Router>
        <div class="flex pt-11 justify-between">
          <h2 class="text-4xl text-white font-bold pl-12  ">Vaccation</h2>
          <ul class=" flex text-2xl font-semibold ">
            <li class="mr-5 ">
              <Link to="/home">Home</Link>
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
