import React, { useState, useEffect } from "react";
import "../../assets/css/font.css";
import "../../assets/css/button.css";
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
      <h1 class="text-4xl font-bold text-center  mt-20">Travel Restrictions</h1>

      <div class="flex justify-center items-center">
        <div class="relative flex-wrap items-stretch mb-15  m-5 px-20 w-2/3 ">
          <form onSubmit={handleSearch} class="flex">
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
              class="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 w-36 h-14 rounded ml-1 text-xl"
            >
              <i class="fas fa-search"></i>
              <span class="text-lg ml-2">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div class="relative"></div>

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
