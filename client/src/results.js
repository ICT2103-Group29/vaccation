import React, { useState } from "react";
import "./assets/font.css";
import "./assets/button.css";

import Button from "./components/button";
import Card from "./components/card";

const bookingDetails = [
  {
    id: 1,
    flightName: "Singapore Airlines",
    fromCountry: "SIN",
    fromDepartTime: "15:00",
    fromArrivalTime: "18:35",
    toCountry: "MNL",
    toDepartTime: "09:45",
    toArrivalTime: "13:35",
    price: "$1281.99",
  },
  {
    id: 2,
    flightName: "Manila Airlines",
    fromCountry: "SIN",
    fromDepartTime: "15:00",
    fromArrivalTime: "18:35",
    toCountry: "MNL",
    toDepartTime: "09:45",
    toArrivalTime: "13:35",
    price: "$1281.99",
  },
];

const Results = (props) => {
  return (
    <div class="">
      <h1 class="text-4xl font-bold text-blue-800 mt-20 text-center">
        Plan Ahead and Book with Confidence
      </h1>
      <div class="text-center mt-12">
        <h3 class="text-2xl font-extrabold">Results From Booking</h3>
        <h3 class="text-2xl font-bold text-blue-800">Singapore to Manila</h3>
      </div>

      <div class=" mt-26 m-auto w-8/12 ">
        {bookingDetails.map((item) => (
          <Card>
            <div class="flex justify-evenly text-2xl font-semibold items-center">
              <h3 class=" font-bold">{item.flightName}</h3>
              <div>
                <p class="text-blue-800">{item.fromCountry}</p>
                <p>{item.fromDepartTime}</p>
                <p class="text-blue-800">{item.toCountry}</p>
                <p>{item.fromArrivalTime}</p>
              </div>
              <div>
                <p class="text-blue-800"> {item.toCountry}</p>
                <p>{item.toDepartTime}</p>
                <p class="text-blue-800">{item.fromCountry}</p>
                <p>{item.toArrivalTime}</p>
              </div>
              <div class="flex">
                <p class="text-4xl font-extrabold mr-12">{item.price}</p>
                <Button type="submit">Book</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Results;
