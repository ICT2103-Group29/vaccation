import React, { useState } from "react";
import "../../assets/css/font.css";

import LargeCard from "../Shared/LargeCard";
import { Button } from "antd";
import "../../assets/css/button.css";

import { Form, Select, DatePicker } from "antd";

function PCRClinics(){
  return(
    <div class>
      <h1 class=" text-5xl text-center pt-20 text-blue-900 pb-10"><b>Looking for a clinic near you for your PCR testing?</b></h1>

      <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
  />
   <div class="flex justify-center items-center">
  <div class="relative flex-wrap items-stretch mb-15  m-5 px-20 w-2/3 ">
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
  <div class="relative">
    
</div>

      <div class="p-2 flex flex-row justify-center ">
        <div class="m-5">
          <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-52 h-14 rounded-full text-xl">Filter option 1</button>
        </div>
        <div class="m-5 ">
          <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-52 h-14 rounded-full text-xl">Filter option 2</button>
        </div>
      </div>
    

      <div class="flex flex-col pb-20">
        <div class="container mx-auto  my-4 px-4 py-4 bg-blue-800">

          <div class="bg-white m-10 p-5 rounded-2xl"> 
          <p class="text-left ..."><h1 class="text-2xl"><b>Fullerton Healthcare</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Location:</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Contact:</b></h1></p>
            <div class="bg-purple-200 m-10 p-5 h-72 rounded-2xl">
              <p class="text-left ..."><h1 class="text-2xl"><b> Monday - Thursday</b></h1></p>
              <p class="text-left ..."><h1 class="text-2xl"><b>Opening Hours: </b></h1></p>
            </div>
          </div>
          <div class="bg-white m-10 p-5 rounded-2xl"> 
          <p class="text-left ..."><h1 class="text-2xl"><b>Fullerton Healthcare</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Location:</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Contact:</b></h1></p>
            <div class="bg-purple-200 m-10 p-5 h-72 rounded-2xl">
              <p class="text-left ..."><h1 class="text-2xl"><b> Monday - Thursday</b></h1></p>
              <p class="text-left ..."><h1 class="text-2xl"><b>Opening Hours: </b></h1></p>
            </div>
          </div>
          <div class="bg-white m-10 p-5 rounded-2xl"> 
          <p class="text-left ..."><h1 class="text-2xl"><b>Fullerton Healthcare</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Location:</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Contact:</b></h1></p>
            <div class="bg-purple-200 m-10 p-5 h-72 rounded-2xl">
              <p class="text-left ..."><h1 class="text-2xl"><b> Monday - Thursday</b></h1></p>
              <p class="text-left ..."><h1 class="text-2xl"><b>Opening Hours: </b></h1></p>
            </div>
          </div>
          <div class="bg-white m-10 p-5 rounded-2xl"> 
          <p class="text-left ..."><h1 class="text-2xl"><b>Fullerton Healthcare</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Location:</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Contact:</b></h1></p>
            <div class="bg-purple-200 m-10 p-5 h-72 rounded-2xl">
              <p class="text-left ..."><h1 class="text-2xl"><b> Monday - Thursday</b></h1></p>
              <p class="text-left ..."><h1 class="text-2xl"><b>Opening Hours: </b></h1></p>
            </div>
          </div>
          <div class="bg-white m-10 p-5 rounded-2xl"> 
          <p class="text-left ..."><h1 class="text-2xl"><b>Fullerton Healthcare</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Location:</b></h1></p>
          <p class="text-left ..."><h1 class="text-2xl"><b>Contact:</b></h1></p>
            <div class="bg-purple-200 m-10 p-5 h-72 rounded-2xl">
              <p class="text-left ..."><h1 class="text-2xl"><b> Monday - Thursday</b></h1></p>
              <p class="text-left ..."><h1 class="text-2xl"><b>Opening Hours: </b></h1></p>
            </div>
          </div>
        
        
        </div>

      </div>
    </div>
    
  )
}

export default PCRClinics;
