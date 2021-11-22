import React from "react";
import "../../assets/css/font.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="max-screen h-22 mx-auto bg-blue-800 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between pt-5 items-center">
        <h2 className="text-4xl text-white font-sans italic font-bold pl-12  ">
          <NavLink className="hover:text-white" to="/" exact>
            Vaccation
          </NavLink>
        </h2>
        <ul className="flex text-xl font-semibold mr-5 mt-3">
          <li className="mr-5 " key="/">
            <NavLink
              exact
              activeClassName="text-white bg-blue-700 px-3 py-2 rounded-md"
              className="hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-5" key="/travelRestrictions">
            <NavLink
              exact
              activeClassName="text-white bg-blue-700 px-3 py-2 rounded-md"
              className="hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/travelRestrictions"
            >
              Travel Restrictions
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              exact
              activeClassName="text-white bg-blue-700 px-3 py-2 rounded-md"
              className="hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/PCRClinics"
            >
              PCR Clinics
            </NavLink>
          </li>
          <li className="mr-5" key="/booking">
            <NavLink
              exact
              activeClassName="text-white bg-blue-700 px-3 py-2 rounded-md"
              className="hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/booking"
            >
              Booking
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
