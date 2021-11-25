import React, { useEffect, useState, Fragment, createElement } from "react";
import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import { Form, Input, Button, DatePicker } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment";

const PassengerDetails = (props) => {
  const history = useHistory();
  const [numberOfPassengers, setNumberOfPassengers] = useState(0);

  //get selected flight

  //get passenger form data
  const flight = props.location.state?.flight;
  const defaultObject = {
    firstName: "",
    lastName: "",
    email: "",
    passportNumber: "",
    nationality: "",
    placeOfIssue: "",
    expiryDate: "",
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

  const makeBooking = async (e) => {
    e.preventDefault();

    const data = {
      flight: flight,
      customers: postData,
    };

    history.push("/payment", { data });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
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

  const handleDateChange = (e, name, index) => {
    // 1. Make a shallow copy of the items
    setPostData((array) => {
      let items = [...array];
      // 2. Make a shallow copy of the item you want to mutate
      let item = { ...items[index] };
      // 3. Replace the property you're intested in
      item[name] = moment(e).format("YYYY-MM-DD");
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      items[index] = item;
      // 5. Set the state to our new copy
      return items;
    });
  };
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  return (
    <div>
      <h1 class="text-4xl font-bold text-center  mt-20">
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
                        onChange={(e) => handleChange(e, index)}
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
                        onChange={(e) => handleChange(e, index)}
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
                        onChange={(e) => handleChange(e, index)}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Mobile Number"
                      name="mobileNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please input the mobile number!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        onChange={(e) => handleChange(e, index)}
                      />
                    </Form.Item>
                  </div>
                  <div class="">
                    <Form.Item
                      label="Passport Number"
                      name="passportNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please input your passport number!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        name="passportNumber"
                        placeholder="Enter Passport Number"
                        onChange={(e) => handleChange(e, index)}
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
                        onChange={(e) => handleChange(e, index)}
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
                        onChange={(e) => handleChange(e, index)}
                      />
                    </Form.Item>
                  </div>
                  <div class="flex justify-evenly">
                    <Form.Item
                      label="Expiry"
                      name="expiryDate"
                      rules={[
                        {
                          required: true,
                          message: "Please input your expiry date!",
                        },
                      ]}
                      disabledDate={disabledDate}
                    >
                      <DatePicker
                        name="expiryDate"
                        onChange={(e) =>
                          handleDateChange(e, "expiryDate", index)
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
                        name="dob"
                        onChange={(e) => handleDateChange(e, "dob", index)}
                      />
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </LargeCard>
          ))}

          <div class="p-14 text-center">
            <Button type="primary" htmlType="submit" onClick={makeBooking}>
              Next
            </Button>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default PassengerDetails;
