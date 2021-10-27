import React, { useState } from "react";
import "../assets/font.css";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Travel Restrictions", href: "#", current: false },
  { name: "PCR Clinics", href: "#", current: false },
  { name: "Booking", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = (props) => {
  return (
    <div class=" max-screen h-28 mx-auto px-2 sm:px-6 lg:px-8 bg-blue-800">
      <div className="flex justify-end p-8">
        <h2 class="text-4xl text-white font-bold content-start">Vaccation</h2>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "text-white font-bold"
                : "text-gray-300  hover:text-white hover: font-bold",
              "px-3 py-2  font-normal  text-xl"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
