import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import moment from "moment";
import { booking } from "../../api";
import { Form, Input, Button, DatePicker, Modal } from "antd";

const PassengerDetails = () => {
  const history = useHistory();
  const [data, setData] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const [paymentData, setPaymentData] = useState({
    amount: 0,
    paymentMethod: "Visa",
    paymentStatus: "Paid",
    expireMonth: 0,
    expireYear: 0,
  });

  const location = useLocation();

  const makeBooking = async (e) => {
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

    setPaymentData({ ...paymentData, amount: data?.flight.Price });

    const bookingData = {
      flight: flightObj,
      customers: data.customers,
      payment: paymentData,
    };
    const res1 = await booking(bookingData);
    if (res1.status === 200) {
      console.log("status 200");
      setBookingId(res1.data.bookingId);
      setIsModalVisible(true);
    } else {
      console.log("error", res1.status);
    }
  };

  const showModal = () => {
    setIsConfirmModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    history.push({
      pathname: "/checkBooking",
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleConfirmOk = () => {
    setIsConfirmModalVisible(false);
    makeBooking();
  };

  const handleConfirmCancel = () => {
    setIsConfirmModalVisible(false);
  };

  useEffect(() => {
    const state = location.state?.data;
    console.log(location.state);
    setData(state);
  }, []);

  useEffect(() => {
    console.log("Payment", paymentData);
  }, [paymentData]);

  return (
    <div>
      <h1 class="text-4xl font-bold text-center mt-20">
        Plan Ahead and Book with Confidence
      </h1>
      <div class="m-auto">
        <h3 class="text-2xl font-bold text-center text-blue-800 mt-4">
          Payment
        </h3>
        <LargeCard>
          <Form
            layout="vertical"
            initialValues={{ remember: true }}
            initialValues={{
              remember: true,
            }}
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
                  <Input size="large" placeholder="Enter Credit Card Name" />
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
                  <Input size="large" placeholder="Enter Credit Card Number" />
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
                      picker="month"
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          expireMonth: parseInt(moment(e?.target).format("MM")),
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
                      picker="year"
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          expireYear: parseInt(moment(e?.target).format("YY")),
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
                    <Input size="large" placeholder="Enter CVV" picker="year" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div class=" mt-12  text-center">
              <h3 class="text-xl font-bold text-blue-800 ">
                Total to be Paid Now
              </h3>
              <h3 class="text-4xl font-extrabold ">${data?.flight.Price}</h3>
            </div>
            <div class="text-center mt-20 flex justify-evenly ">
              <Link to="/passengers">
                <Button type="default">Back</Button>
              </Link>
              <Button type="primary" htmlType="submit" onClick={showModal}>
                Submit
              </Button>
              <Modal
                title="Booking Confirmation"
                visible={isConfirmModalVisible}
                onOk={handleConfirmOk}
                onCancel={handleConfirmCancel}
              >
                Proceed to Payment?
              </Modal>
              <Modal
                title="Payment Confirmed!"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                Your payment is successful! <br />
                BookingID: {bookingId}
              </Modal>
            </div>
          </Form>
        </LargeCard>
      </div>
    </div>
  );
};

export default PassengerDetails;
