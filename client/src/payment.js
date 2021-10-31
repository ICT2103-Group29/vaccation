import React, { useState } from "react";
import "./assets/font.css";
import "./assets/searchFlights.css";
import LargeCard from "./components/large_card";
import CardGradient from "./components/cardGradient";
import Button from "./components/button";

import { Form, Select, DatePicker, Input } from "antd";
function onChange(date, dateString) {
  console.log(date, dateString);
}

const Payment = () => {
  return (
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
        Plan Ahead and Book with Confidence
      </h1>
      <div class="m-auto">
        <h3 class="text-2xl font-bold pl-64">Passenger 1 Detail</h3>
        <LargeCard>
          <Form layout="vertical">
            <div class="font-bold ">
              <div class=" ">
                <Form.Item label="First Name ">
                  <Input size="large" placeholder="Enter First Name" />
                </Form.Item>
                <Form.Item label="Last Name">
                  <Input size="large" placeholder="Enter Last Name" />
                </Form.Item>
                <Form.Item label="Email">
                  <Input size="large" placeholder="Enter Email" />
                </Form.Item>
              </div>
              <div class="">
                <div class="flex">
                  <Form.Item label="Passport Number">
                    <Input size="large" placeholder="Enter Passport Number" />
                  </Form.Item>
                  <Form.Item label="Nationality">
                    <Input size="large" placeholder="Enter Nationality" />
                  </Form.Item>
                  <Form.Item label="Place of Issue">
                    <Input size="large" placeholder="Enter Place of Issue" />
                  </Form.Item>
                </div>
                <div class="flex ">
                  <Form.Item label="Expiry">
                    <Input size="large" placeholder="Enter Expiry" />
                  </Form.Item>
                  <Form.Item label="DOB">
                    <Input size="large" placeholder="Enter DOB" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </LargeCard>
      </div>
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default Payment;
