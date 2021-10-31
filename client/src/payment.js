import React, { useState } from "react";
import "./assets/font.css";
import "./assets/searchFlights.css";
import LargeCard from "./components/large_card";

import { Form, Input, Button, DatePicker } from "antd";
function onChange(date, dateString) {
  console.log(date, dateString);
}

const PassengerDetails = () => {
  return (
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
        Plan Ahead and Book with Confidence
      </h1>
      <div class="m-auto">
        <h3 class="text-2xl font-bold pl-64">Payment</h3>
        <LargeCard>
          <Form layout="vertical">
            <div class="font-bold">
              <div class=" ">
                <Form.Item label="Name on Credit Card* ">
                  <DatePicker onChange={onChange} picker="month" />
                </Form.Item>
                <Form.Item label="Credit Card Number*">
                  <Input size="large" placeholder="Enter Credit Card Number" />
                </Form.Item>
              </div>
              <div class="">
                <div class="flex">
                  <Form.Item label="Expiry Month*">
                    <DatePicker onChange={onChange} picker="month" />
                  </Form.Item>
                  <Form.Item label="Expiry Year*">
                    <DatePicker onChange={onChange} picker="year" />
                  </Form.Item>
                  <Form.Item label="CVV*">
                    <Input size="large" placeholder="Enter CVV" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
          <div class="text-center mt-12 text-right">
            <h3 class="text-xl font-bold text-blue-800">
              Total to be paid now
            </h3>
            <h3 class="text-4xl font-extrabold ">$2609.10</h3>
          </div>
        </LargeCard>
      </div>
      <div class="text-center mt-20 ">
        <Button type="primary">Back</Button>
        <Button type="primary">Submit</Button>
      </div>
    </div>
  );
};

export default PassengerDetails;
