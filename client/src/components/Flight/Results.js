import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

import "../../assets/css/font.css";
import "../../assets/css/button.css";
import { Button, Pagination } from "antd";
import SmallCard from "../Shared/SmallCard";
import moment from "moment";
import { ArrowRightOutlined } from "@ant-design/icons";

// const bookingDetails = [
//   {
//     id: 1,
//     flightName: "Singapore Airlines",
//     fromCountry: "SIN",
//     fromDepartTime: "15:00",
//     fromArrivalTime: "18:35",
//     toCountry: "MNL",
//     toDepartTime: "09:45",
//     toArrivalTime: "13:35",
//     price: "$1281.99",
//   },
//   {
//     id: 2,
//     flightName: "Manila Airlines",
//     fromCountry: "SIN",
//     fromDepartTime: "15:00",
//     fromArrivalTime: "18:35",
//     toCountry: "MNL",
//     toDepartTime: "09:45",
//     toArrivalTime: "13:35",
//     price: "$1281.99",
//   },
// ];

const Results = (props) => {
  const flights = props.location.state.flight;
  console.log("flights", flights);

  // result.flight.forEach((data) => console.log(data.Price));
  // console.log("result price", result.flight.Price);

  return (
    <div>
      <h1 class="text-4xl font-bold text-blue-800 mt-20 text-center">
        Plan Ahead and Book with Confidence
      </h1>
      <h3 class="text-2xl font-extrabold text-center">Results From Booking</h3>
      {/* {!Destination.loading && ( */}
      <div class=" mt-26 m-auto w-3/6">
        {flights.map((flight) => (
          <SmallCard>
            <div class="flex justify-evenly  mt-8 ">
              <div class="">
                <h2 class="text-lg font-bold ">Outbound</h2>
                <h3>{flight.Outbound.Carrier.Name}</h3>
              </div>

              <div>
                <h3 class="font-bold text-blue-800 text-base">
                  {flight.Outbound.Origin.Name}
                  <span class="p-2">
                    <ArrowRightOutlined />
                  </span>
                  {flight.Inbound.Origin.Name}
                </h3>
                <div class="font-semibold ">
                  <div class="flex justify-evenly">
                    <div>
                      <h3>{moment(flight.Outbound.Departure).format("LL")}</h3>
                      <h3>{moment(flight.Outbound.Departure).format("LT")}</h3>
                    </div>

                    <div>
                      <h3>{moment(flight.Outbound.Arrival).format("LL")}</h3>
                      <h3>{moment(flight.Outbound.Arrival).format("LT")}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-evenly mt-14 ">
              <div class="">
                <h2 class="text-lg font-bold ">Inbound</h2>
                <h3>{flight.Inbound.Carrier.Name}</h3>
              </div>
              <div>
                <h3 class="font-bold text-blue-800 text-base">
                  {flight.Inbound.Origin.Name}
                  <span class="p-2">
                    <ArrowRightOutlined />
                  </span>
                  {flight.Outbound.Origin.Name}
                </h3>
                <div class="font-semibold ">
                  <div class="flex justify-evenly">
                    <div>
                      <h3>{moment(flight.Inbound.Departure).format("LL")}</h3>
                      <h3>{moment(flight.Inbound.Departure).format("LT")}</h3>
                    </div>

                    <div>
                      <h3>{moment(flight.Outbound.Arrival).format("LL")}</h3>
                      <h3>{moment(flight.Outbound.Arrival).format("LT")}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-4xl font-extrabold mr-12"></p>
            <Button type="primary">Book</Button>
          </SmallCard>
        ))}
      </div>
    </div>
  );
};

export default Results;
