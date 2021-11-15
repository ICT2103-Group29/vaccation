import React, { useState } from "react";
import "../../assets/css/font.css";

import LargeCard from "../Shared/LargeCard";
import { Button, Card } from "antd";
import "../../assets/css/button.css";

import { Form, Select, DatePicker } from "antd";
import { Link } from "react-router-dom";

function TravelRestrictionsFull(){
  return(
    <div class="bg-white pb-28">
    <h1 class=" text-5xl text-center pt-20 text-blue-900 pb-10"><b>Travel Restrictions</b></h1>

  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
  />  
   <div class="flex justify-center items-center">
  <div class="relative flex-wrap items-stretch mb-20  m-5 px-20 w-2/3 ">
    <span
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
    </span>
    <input
      type="text"
      placeholder="Search"
      class="
        px-3
        py-3
        placeholder-gray-400
        text-gray-600
        relative
        bg-white bg-white
        rounded
        text-sm
        border border-gray-400
        outline-none
        focus:outline-none focus:ring
        w-full
        pl-10
      "
    />
    </div>
  </div>
  
  <div class=" mt-26 m-auto w-8/12 shadow-2xl text-xl">
        <div class="text-3xl">
        <header class="bg-blue-200 rounded-t-lg py-3 px-8 font-extrabold">Korea</header>
        </div>
        <div class="px-8 pt-4">
          <div class="pb-10">
          <h1 class="text-left font-bold pb-6">Quarantine</h1>
          </div>
          <div class="pb-10">
          <h1 class="text-left font-bold">Restrictions</h1>
          </div>
        </div>
      </div>

    </div>
    
   
  )
}

export default TravelRestrictionsFull;
