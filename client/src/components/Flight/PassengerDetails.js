import React, { useEffect, useState, Fragment, createElement } from "react";
import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import { Form, Input, Button, DatePicker } from "antd";
import { booking } from "../../api";

import moment from "moment";

const PassengerDetails = (props) => {
  const [numberOfPassengers, setNumberOfPassengers] = useState(0);

  //get selected flight

  //get passenger form data
  const flight = props.location.state?.flight;
  const defaultObject = {
    firstName: "",
    lastName: "",
    email: "",
    passportNo: "",
    nationality: "",
    placeOfIssue: "",
    expiry: "",
    dob: "",
  };

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setNumberOfPassengers(flight.Passengers);
  }, [flight]);

  useEffect(() => {
    const defaultArr = [];
    for (let i = 0; i < flight.Passengers; i++) {
      defaultArr.push(defaultObject);
    }
    setPostData(defaultArr);
  }, [numberOfPassengers]);

  const makeBooking = async (e, index) => {
    e.preventDefault();
    console.log(postData);
    // let data = {
    //   firstName: postData.firstName,
    //   lastname: postData.lastname,
    //   email: postData.email,
    //   passportNo: postData.passportNo,
    //   nationality: postData.nationality,
    //   placeOfIssue: postData.placeOfIssue,
    //   expiry: postData.expiry,
    //   dob: postData.dob,
    // };

    // setPostData((array) => [...array, data]);

    // const res1 = await booking(data, flight);
    // console.log("Status", res1.status);
    // if (res1.status === 200) {
    //   console.log("status 200");
    // } else {
    //   console.log("error", res1.status);
    // }
  };

  const handleChange = (e, name, value, index) => {
    console.log(value);
    // 1. Make a shallow copy of the items
    setPostData((array) => {
      let items = [...array];
      console.log("items", items);
      // 2. Make a shallow copy of the item you want to mutate
      let item = { ...items[index] };
      // 3. Replace the property you're intested in
      item[name] = value;
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      items[index] = item;
      // 5. Set the state to our new copy
      return items;
    });
  };

  return (
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
        Plan Ahead and Book with Confidence
      </h1>
      <Fragment>
        <div class="m-auto">
          {postData.map((passenger, index) => (
            <LargeCard>
              <h3 class="text-lg font-bold text-center">
                Passenger {index + 1} Detail
              </h3>

              <Form
                layout="vertical"
                nitialValues={{ remember: true }}
                initialValues={{
                  remember: true,
                }}
                key={passenger}
              >
                <div class="font-bold">
                  <div class=" mt-12">
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
                        id={index.toString()}
                        size="large"
                        key={index}
                        name="firstName"
                        onChange={(e) =>
                          handleChange(e, "firstName", e.target.value, index)
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
                        name="lastName"
                        onChange={(e) =>
                          handleChange(e, "lastName", e.target.value, index)
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
                        name="email"
                        placeholder="Enter Email"
                        onChange={(e) =>
                          handleChange(e, "email", e.target.value, index)
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
                        name="passportNo"
                        placeholder="Enter Passport Number"
                        onChange={(e) =>
                          handleChange(e, "passportNo", e.target.value, index)
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
                        name="nationality"
                        placeholder="Enter Nationality"
                        onChange={(e) =>
                          handleChange(e, "nationality", e.target.value, index)
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
                        name="placeOfIssue"
                        placeholder="Enter Place of Issue"
                        onChange={(e) =>
                          handleChange(e, "placeOfIssue", e.target.value, index)
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
                        name="expiry"
                        onChange={(e) =>
                          handleChange(
                            e,
                            "expiry",
                            moment(e?.target).format("YYYY-MM-DD"),
                            index
                          )
                        }
                      />
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
                        name="DOB"
                        onChange={(e) =>
                          handleChange(
                            e,
                            "dob",
                            moment(e?.target).format("YYYY-MM-DD"),
                            index
                          )
                        }
                        // onChange={(e) =>
                        //   setPostData({
                        //     ...postData,
                        //     dob: moment(e.target).format("YYYY-MM-DD"),
                        //   })
                        // }
                      />
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </LargeCard>
          ))}

          <div class="p-14 text-center">
            <Button type="primary" htmlType="submit" onClick={makeBooking}>
              Search Flights
            </Button>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default PassengerDetails;
