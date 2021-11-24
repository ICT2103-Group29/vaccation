// import React, { useEffect, useState, Fragment } from "react";
// import "../../assets/css/font.css";

// function travelRestrictions() {
//     return (
//         <div>
//           <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
//            Travel Restrictions
//           </h1>
//         </div>
        
//           );


// }

// export default travelRestrictions;

import React, { useState, useEffect } from "react";
import "../../assets/css/font.css";

import LargeCard from "../Shared/LargeCard";
import { Button } from "antd";
import "../../assets/css/button.css";

import { Form, Select, DatePicker } from "antd";
import RestrictionsCard from "./RestrictionsCard";
import { getRestrictions, searchRestrictions } from "../../api";

function TravelRestrictions() {
  const [restrictions, setRestriction] = useState([]);
  const [search, setSearch] = useState("");

  const retrieveData = async () => {
    const result = await getRestrictions();
    setRestriction(result.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await searchRestrictions(search);
    if (result.data.length > 0) {
      setRestriction(result.data);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <div class>
      <h1 class=" text-5xl text-center pt-20 text-blue-900 pb-10">
        <b>Travel Restrictions</b>
      </h1>

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      <div class="flex justify-center items-center">
        <div class="relative flex-wrap items-stretch mb-15  m-5 px-20 w-2/3 ">
          <form onSubmit={handleSearch} class="flex">
            {/* <span
              class="
                  z-10
                  h-full
                  leading-snug
                  font-normal
                  absolute
                  text-center text-gray-400
                  absolute
                  bg-transparent
                  rounded
                  text-base
                  items-center
                  justify-center
                  w-8
                  pl-3
                  py-3
                "
            >
              <i class="fas fa-search"></i>
            </span> */}
            <input
              type="text"
              placeholder="Search"
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
      <div class="relative"></div>

      {/* <div class="p-2 flex flex-row justify-center ">
        <div class="m-5">
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-52 h-14 rounded-full text-xl"
          >
            Filter option 1
          </button>
        </div>
        <div class="m-5 ">
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-52 h-14 rounded-full text-xl"
          >
            Filter option 2
          </button>
        </div>
      </div> */}

      <div class="flex flex-col pb-20">
        <div class="container mx-auto  my-4 px-4 py-4 bg-blue-800">
          {restrictions.map((restriction) => (
            <RestrictionsCard data={restriction} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelRestrictions;