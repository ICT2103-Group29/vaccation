import React, { createContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../../assets/css/font.css";
import "../../assets/css/button.css";
import { Button, Pagination } from "antd";
import SmallCard from "../Shared/SmallCard";
import moment from "moment";
import { ArrowRightOutlined } from "@ant-design/icons";
import { getCountries, createSession, places } from "../../api";
const Results = (props) => {
  const flights = props.location.state.flight;
  console.log("flights", flights);

  const [selectedFlight, setSelectedFlight] = useState({
    inboundAirport: "",
    outboundAirport: "",
    carrierName: "",
    inboundDate: "",
    inboundTime: "",
    outboundDate: "",
    outboundTime: "",
  });
  // console.log("flightselected", selectedFlight);

  const handleViewClick = (e, flights) => {
    e.preventDefault();

    props.history.push({
      pathname: e.target.pathname,
      state: { flight: flights },
    });
    console.log("flights", flights);
  };

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
                <h3 name="carrierName">{flight.Outbound.Carrier.Name}</h3>
              </div>

              <div>
                <div>
                  <h3
                    class="font-bold text-blue-800 text-base"
                    name="outboundAirport"
                  >
                    {flight.Outbound.Origin.Name}
                  </h3>
                  <span class="p-2">
                    <ArrowRightOutlined />
                  </span>
                  <h3
                    class="font-bold text-blue-800 text-base"
                    name="inboundAirport"
                  >
                    {flight.Inbound.Origin.Name}
                  </h3>
                </div>
                <div class="font-semibold ">
                  <div class="flex justify-evenly">
                    <div>
                      <h3 name="outboundDate">
                        {moment(flight.Outbound.Departure).format("LL")}
                      </h3>
                      <h3 name="outboundTime">
                        {moment(flight.Outbound.Departure).format("LT")}
                      </h3>
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
                <div>
                  <h3 class="font-bold text-blue-800 text-base">
                    {flight.Inbound.Origin.Name}
                  </h3>
                  <span class="p-2">
                    <ArrowRightOutlined />
                  </span>
                  <h3 class="font-bold text-blue-800 text-base">
                    {flight.Outbound.Origin.Name}
                  </h3>
                </div>
                <div class="font-semibold ">
                  <div class="flex justify-evenly">
                    <div>
                      <h3 name="outboundDate">
                        {moment(flight.Outbound.Departure).format("LL")}
                      </h3>
                      <h3 name="outboundTime">
                        {moment(flight.Outbound.Departure).format("LT")}
                      </h3>
                    </div>

                    <div>
                      <h3 name="outboundDate">
                        {moment(flight.Inbound.Arrival).format("LL")}
                      </h3>
                      <h3 name="outboundTime">
                        {moment(flight.Inbound.Arrival).format("LT")}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/passengerDetails">
              <Button
                type="primary"
                onClick={(e) => handleViewClick(e, flight)}
              >
                Book
              </Button>
            </Link>
          </SmallCard>
        ))}
      </div>
    </div>
  );
};

export default Results;
