import React, { useState } from "react";
import "../../assets/css/font.css";

import LargeCard from "../Shared/LargeCard";
import { Button } from "antd";
import "../../assets/css/button.css";

import { Form, Select, DatePicker } from "antd";

function HowToNavigate(){
  return(
    <div>
      <h1 class=" text-6xl text-center pt-28 text-blue-900"><u><b>How to Navigate</b></u></h1>
      <div class=" grid grid-cols-4 pb-20">

        <div class="bg-blue-200 p-3 rounded w-96 h-96 mx-40 my-40 ">
          <div class="flex justify-center items-center">
            <div class="bg-blue-900 rounded-full h-32 w-32 m-3 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
            </div>
          </div>
          <h1 class="text-3xl text-center text-black"><b><h1 class="text-blue-700"><b>Step 1 - Restrictions</b> </h1></b></h1><h2 class ="text-center text-black text-lg"><b>Check the travel restrictions according to the country you would like to visit and abide by the restrictions </b></h2>
        </div>

        <div class="bg-blue-200 p-3 rounded w-96 h-96 mx-24 my-40">
          <div class="flex justify-center items-center">
            <div class="bg-blue-900 rounded-full h-32 w-32 m-3 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          </div>
          <h1 class="text-3xl text-center text-black"><b><h1 class="text-blue-700"><b>Step 2 - Testing</b> </h1></b></h1><h2 class="text-center text-black text-lg"><b>You can find your nearest PCR Clinic to conduct your swab test if required. </b></h2>
        </div>

        <div class="bg-blue-200 p-3 rounded w-96 h-96 mx-10 my-40">
          <div class="flex justify-center items-center">
            <div class="bg-blue-900 rounded-full h-32 w-32 m-3 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            </div>
          </div>
          <h1 class="text-3xl text-center text-black"><b><h1 class="text-blue-700"><b>Step 3 : Book Flight</b> </h1></b></h1><h2 class="text-center text-black text-lg"><b>Book your flight with Vaccation.</b></h2>
        </div>

        <div class="bg-blue-200 p-3 rounded w-96 h-96 mx-0 my-40">
          <div class="flex justify-center items-center">
            <div class="bg-blue-900 rounded-full h-32 w-32 m-3 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            </div>
          </div>
          <h1 class="text-3xl text-center text-black"><b><h1 class="text-blue-700"><b>Step 4 : Check Booking</b> </h1></b></h1><h2 class="text-center text-black text-lg"><b>You may also check your previous bookings with us.</b></h2>
        </div>
      </div>
    </div>
  )
}

export default HowToNavigate;
