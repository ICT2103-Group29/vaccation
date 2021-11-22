import React, { useEffect, useState, Fragment } from "react";
import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import { Form, Input, Button, DatePicker } from "antd";
import { booking } from "../../api";

import moment from "moment";

const PassengerDetails = (props) => {
  //get selected flight

  //get passenger form data
  const [postData, setPostData] = useState([]);
  const [flight, setFlights] = useState([]);
  const data = props.location.state?.flight;

  console.log(data);

  // const retrieveFlight = (e, flights) => {
  //   e.preventDefault();

  //   props.history.push({
  //     pathname: e.target.pathname,
  //     state: { flight: flights },
  //   });
  //   console.log("flights", flights);
  // };
  const makeBooking = async (e, flights) => {
    e.preventDefault();
    console.log("flights", flights);
    console.log("test", postData.firstName);
    let data = {
      firstName: postData.firstName,
      lastname: postData.lastname,
      email: postData.email,
      passportNo: postData.passportNo,
      nationality: postData.nationality,
      placeOfIssue: postData.placeOfIssue,
      expiry: postData.expiry,
      dob: postData.dob,
    };

    setPostData((prevArray) => [...prevArray, data]);
    console.log("postData", postData);

    // setPostData([data]);

    const res1 = await booking(data, flight);
    console.log("Status", res1.status);
    if (res1.status == 200) {
      console.log("status 200");
    } else {
      console.log("error", res1.status);
    }

    // props.history.push({
    //   pathname: e.target.pathname,
    //   state: { flight: flights },
    // });
  };
  useEffect(() => {
    setFlights(data);
  }, []);

  // //sky scanner api
  // const createSkySession = async (e) => {
  //   //get form data
  //   console.log("postData", postData);

  //   let data = {
  //     originplace: postData.originplace,
  //     destinationplace: postData.destinationplace,
  //     outbounddate: postData.outbounddate,
  //     inbounddate: postData.inbounddate,
  //     adults: postData.adults,
  //   };
  //   console.log("this is data", data);

  //   const res1 = await createSession(data);
  //   console.log("res1 status", res1);
  //   if (res1.status == 200) {
  //     console.log("status 200");
  //   } else {
  //     console.log("error", res1.status);
  //   }
  //   console.log("res1", res1);
  //   let flightData = res1.data;
  //   console.log("flightData", flightData);
  //   setPostData({
  //     originplace: data.originplace,
  //     destinationplace: data.destinationplace,
  //     outbounddate: data.outbounddate,
  //     inbounddate: data.inbounddate,
  //     adults: data.adults,
  //   });
  //   console.log("postData", postData);
  //   props.history.push({
  //     path: e.target.pathname,
  //     state: {
  //       flight: flightData,
  //     },
  //   });
  // };

  return (
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
        Plan Ahead and Book with Confidence
      </h1>
      <Fragment>
        <div class="m-auto">
          <h3 class="text-2xl font-bold pl-64">Passenger Detail</h3>
          <LargeCard>
            <Form
              layout="vertical"
              nitialValues={{ remember: true }}
              initialValues={{
                remember: true,
              }}
              onFinish={makeBooking}
            >
              <div class="font-bold">
                <div class=" ">
                  <Form.Item
                    label="First Name "
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          firstName: e.target.value,
                        })
                      }
                      placeholder="Enter First Name"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Last Name"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please input valid email!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Email"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          email: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <div class="">
                  <Form.Item
                    label="Passport Number"
                    name="passportNo"
                    rules={[
                      {
                        required: true,
                        message: "Please input your passport number!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Passport Number"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          passportNo: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="Nationality"
                    name="nationality"
                    rules={[
                      {
                        required: true,
                        message: "Please input your nationality!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Nationality"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          nationality: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="Place of Issue"
                    name="placeOfIssue"
                    rules={[
                      {
                        required: true,
                        message: "Please input your place of issue",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Place of Issue"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          placeOfIssue: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <div class="flex justify-evenly">
                  <Form.Item
                    label="Expiry"
                    name="expiry"
                    rules={[
                      {
                        required: true,
                        message: "Please input your expiry date!",
                      },
                    ]}
                  >
                    <DatePicker
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          expiry: moment(e.target).format("YYYY-MM-DD"),
                        })
                      }
                    />

                    {/* <Input
                        size="large"
                        placeholder="Enter Expiry"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            expiry: e,
                          })
                        }
                      /> */}
                  </Form.Item>
                  <Form.Item
                    label="DOB"
                    name="DOB"
                    rules={[
                      {
                        required: true,
                        message: "Please input your date of birth",
                      },
                    ]}
                  >
                    <DatePicker
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          dob: moment(e.target).format("YYYY-MM-DD"),
                        })
                      }
                    />
                    {/* <Input
                        size="large"
                        placeholder="Enter DOB"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            dob: e,
                          })
                        }
                      /> */}
                  </Form.Item>
                </div>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={(e) => makeBooking(e, flight)}
                >
                  Search Flights
                </Button>
              </Form.Item>
            </Form>
          </LargeCard>
        </div>
      </Fragment>
    </div>
  );
};

export default PassengerDetails;
