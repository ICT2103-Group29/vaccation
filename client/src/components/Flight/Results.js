import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/font.css";
import "../../assets/css/button.css";
import { Button } from "antd";
import SmallCard from "../Shared/SmallCard";
import moment from "moment";
import { ArrowRightOutlined } from "@ant-design/icons";
const Results = (props) => {
  const [flights, setFlights] = useState([]);
  const handleViewClick = (e, flights) => {
    e.preventDefault();

    props.history.push({
      pathname: e.target.pathname,
      state: { flight: flights },
    });
    console.log("flights", flights);
  };

  useEffect(() => {
    const data = props.location.state?.flight;
    console.log("data", data);

    setFlights(data);
  }, []);

  return (
    <div>
      <h1 class="text-4xl font-bold mt-20 text-center">
        Plan Ahead and Book with Confidence
      </h1>
      <h3 class="text-2xl font-bold text-center text-blue-800">
        Results From Booking
      </h3>
      {flights.length > 0 && (
        <div class="  m-auto w-3/6">
          {flights.map((flight) => (
            <SmallCard>
              <div class="flex">
                <div class=" ">
                  <div class="flex justify-evenly  pl-16 ">
                    <div class="mr-12">
                      <h2 class="text-lg font-bold ">One Way</h2>
                      {moment(flight.Outbound.Departure).format("LL")}
                      <h3 name="carrierName">{flight.Outbound.Carrier.Name}</h3>
                    </div>

                    <div>
                      <div>
                        <h3
                          class="font-bold text-blue-800 "
                          name="outboundAirport"
                        >
                          {flight.Outbound.Origin.Name}
                        </h3>
                        <span class="p-2">
                          <ArrowRightOutlined />
                        </span>
                        <h3
                          class="font-bold text-blue-800"
                          name="inboundAirport"
                        >
                          {flight.Inbound.Origin.Name}
                        </h3>
                      </div>
                      <div class="font-semibold ">
                        <div class="flex justify-evenly">
                          <div>
                            <h3 name="outboundDate">
                              {moment(flight.Outbound.Arrival).format("LT")}
                            </h3>
                          </div>
                          <div>
                            <h3 name="outboundTime">
                              {moment(flight.Outbound.Departure).format("LT")}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="m-auto">
                  <h3 class="font-bold text-2xl ">
                    ${flight.Price * flight.Passengers}
                  </h3>
                  <Button
                    type="primary"
                    onClick={(e) => handleViewClick(e, flight)}
                  >
                    <Link to="/passengerDetails">Book </Link>
                  </Button>
                </div>
              </div>
            </SmallCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
