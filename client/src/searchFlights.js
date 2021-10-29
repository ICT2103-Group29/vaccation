import React, { useState } from "react";
import "./assets/font.css";
import "./assets/searchFlights.css";

import LargeCard from "./components/large_card";
import CardGradient from "./components/cardGradient";
import Banner from "./components/banner";
import Button from "./components/button";

import { Form, Select, DatePicker } from "antd";
function onChange(date, dateString) {
  console.log(date, dateString);
}

const cardTypes = [
  { id: 1, name: "Travel Restrictions" },
  { id: 2, name: "Pre-Departure COVID Test" },
  { id: 1, name: "Travel Restrictions" },
];

const SearchFlights = () => {
  return (
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
        Plan Ahead and Book with Confidence
      </h1>
      <LargeCard>
        <Form layout="vertical">
          <div class="font-bold ">
            <div class=" ">
              <Form.Item label="Where From ">
                <Select>
                  <Select.Option value="from">Singapore</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Where To">
                <Select>
                  <Select.Option value="to">Singapore</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Passengers">
                <Select>
                  <Select.Option value="noOfPassengers">1</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div class="">
              <Form.Item label="Departure Date">
                <DatePicker onChange={onChange} />
              </Form.Item>
              <Form.Item label="Arrival Date">
                <DatePicker onChange={onChange} />
              </Form.Item>
            </div>
            <Button type="submit">Search Flights</Button>
          </div>
        </Form>
      </LargeCard>
      {/* <Banner>
        <p class="text-3xl">Checklist before you book your flight</p>
        <p class="text-xl">Here are the following steps you can follow:</p>
      </Banner> */}
      <div class="flex justify-around  mt-32 m-auto w-11/12">
        {cardTypes.map((item) => (
          <CardGradient>
            <p>{item.name}</p>
          </CardGradient>
        ))}
      </div>
    </div>
  );
};

export default SearchFlights;
