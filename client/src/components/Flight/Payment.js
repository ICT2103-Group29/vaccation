import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import moment from "moment";

import { booking } from "../../api";

import { Form, Input, Button, DatePicker, Modal } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}

// const stripePromise = loadStripe("pk_test_D4uxNaSHMXHtez9zf7ffdAM5");

const PassengerDetails = () => {
  const history = useHistory();
  const [data, setData] = useState();
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    ccNumber: "",
    expiryMonth: "",
    expiryYear: "",
    CVV: "",
  });
  console.log(paymentData);

  const location = useLocation();

  const makeBooking = async (e) => {
    console.log("data", data);

    const { flight } = data;
    const flightObj = {
      airline: flight.Outbound.Carrier.Name,
      arrivalTime: flight.Outbound.Departure,
      departureTime: flight.Outbound.Arrival,
      departureAirport: flight.Outbound.Destination.Name,
      destinationAirport: flight.Outbound.Origin.Name,
      flightDuration: flight.Outbound.Duration,
      flightNumber: flight.Outbound.FlightNumber,
      origin: flight.OriginCountry,
      destination: flight.DestinationCountry,
    };

    console.log("flightobj", flightObj);
    const bookingData = {
      flight: flightObj,
      customers: data.customers,
      payment: paymentData,
    };
    console.log("data", bookingData);
    const res1 = await booking(bookingData);
    if (res1.status === 200) {
      console.log("status 200");
    } else {
      console.log("error", res1.status);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    history.push({
      pathname: "/",
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const state = location.state?.data;
    console.log(location.state);
    setData(state);
  }, []);

  return (
    <div>
      <h1 class="text-4xl font-bold text-center mt-20">
        Plan Ahead and Book with Confidence
      </h1>
      <div class="m-auto">
        <h3 class="text-2xl font-bold pl-48">Payment</h3>
        <LargeCard>
          <Form
            layout="vertical"
            initialValues={{ remember: true }}
            initialValues={{
              remember: true,
            }}
            onFinish={makeBooking}
          >
            <div class="font-bold">
              <div>
                <Form.Item
                  label="Name on Credit Card "
                  name="creditCardNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name on credit card",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Enter Credit Card Name"
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cardName: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Credit Card Number"
                  name="creditCardNo"
                  rules={[
                    {
                      required: true,
                      message: "Please enter credit card number",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Enter Credit Card Number"
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        ccNumber: e.target.value,
                      })
                    }
                  />
                </Form.Item>
              </div>
              <div class="">
                <div class="">
                  <Form.Item
                    label="Expiry Month"
                    name="expiryMonth"
                    rules={[
                      {
                        required: true,
                        message: "Please enter expiry month",
                      },
                    ]}
                  >
                    <DatePicker
                      onChange={onChange}
                      picker="month"
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          expiryMonth: moment(e.target).format("MMM"),
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="Expiry Year"
                    name="expiryYear"
                    rules={[
                      {
                        required: true,
                        message: "Please enter expiry year",
                      },
                    ]}
                  >
                    <DatePicker
                      onChange={onChange}
                      picker="year"
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          expiryYear: moment(e.target).format("yyyy"),
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="CVV"
                    name="CVV"
                    rules={[
                      {
                        required: true,
                        message: "Please enter CVV ",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter CVV"
                      onChange={onChange}
                      picker="year"
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          CVV: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div class=" mt-12 ">
              <h3 class="text-xl font-bold text-blue-800">
                Total to be Paid Now
              </h3>
              <h3 class="text-4xl font-extrabold ">{data?.flight.Price}</h3>
            </div>
            <div class="text-center mt-20 flex justify-evenly ">
              <Link to="/passengers">
                <Button type="default">Back</Button>
              </Link>
              <Link></Link>
              <Button
                type="primary"
                htmlType="submit"
                onChange={makeBooking}
                onClick={showModal}
              >
                Submit
              </Button>
              <Modal
                title="Payment Confirmed!"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                Your payment is successful!
              </Modal>
            </div>
          </Form>
        </LargeCard>
      </div>
    </div>
  );
};

export default PassengerDetails;
