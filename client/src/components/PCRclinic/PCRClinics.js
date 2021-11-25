import React, { useState, useEffect } from "react";
import "../../assets/css/font.css";
import "../../assets/css/button.css";
import PCRCard from "./PCRCard";
import { getPCRClinics, searchPCRClinic } from "../../api";

function PCRClinics() {
  const [clinics, setClinics] = useState([]);
  const [search, setSearch] = useState("");

  const retrieveData = async () => {
    const result = await getPCRClinics();
    setClinics(result.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await searchPCRClinic(search);
    if (result.data.length > 0) {
      setClinics(result.data);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <div class>
      <h1 class="text-4xl font-bold text-center  mt-20">
        Looking for Nearby PCR Clinic?
      </h1>

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
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
              class="bg-blue-800 hover:bg-blue-600 text-white font-bold  w-36 h-14 rounded ml-1 "
            >
              <span class="text-lg ">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div class="relative"></div>
      <div class="flex flex-col pb-20">
        <div class="container mx-auto  my-4 px-4 py-4 bg-blue-800">
          {clinics.map((clinic) => (
            <PCRCard data={clinic} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PCRClinics;
