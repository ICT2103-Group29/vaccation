import React, { useEffect, useState, Fragment } from "react";
import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";

import { Form, Input, Button } from "antd";

const PassengerDetails = () => {
  //get form data
  const [postData, setPostData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    passportNo: "",
    nationality: "",
    placeOfIssue: "",
    expiry: "",
    dob: "",
  });

  const onFinish = (e) => {
    e.preventDefault();

    console.log("Success:", e);
  };
  console.log(postData);

  return (
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
        Plan Ahead and Book with Confidence
      </h1>
      <Fragment>
        <div class="m-auto">
          <h3 class="text-2xl font-bold pl-64">Passenger Detail</h3>
          <LargeCard>
            <Form layout="vertical" onClick={onFinish}>
              <div class="font-bold">
                <div class=" ">
                  <Form.Item label="First Name ">
                    <Input
                      size="large"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          firstName: e,
                        })
                      }
                      placeholder="Enter First Name"
                    />
                  </Form.Item>
                  <Form.Item label="Last Name">
                    <Input
                      size="large"
                      placeholder="Enter Last Name"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          lastName: e,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input
                      size="large"
                      placeholder="Enter Email"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          email: e,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <div class="">
                  <div class="flex">
                    <Form.Item label="Passport Number">
                      <Input
                        size="large"
                        placeholder="Enter Passport Number"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            passportNo: e,
                          })
                        }
                      />
                    </Form.Item>
                    <Form.Item label="Nationality">
                      <Input
                        size="large"
                        placeholder="Enter Nationality"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            nationality: e,
                          })
                        }
                      />
                    </Form.Item>
                    <Form.Item label="Place of Issue">
                      <Input
                        size="large"
                        placeholder="Enter Place of Issue"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            placeOfIssue: e,
                          })
                        }
                      />
                    </Form.Item>
                  </div>
                  <div class="flex ">
                    <Form.Item label="Expiry">
                      <Input
                        size="large"
                        placeholder="Enter Expiry"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            expiry: e,
                          })
                        }
                      />
                    </Form.Item>
                    <Form.Item label="DOB">
                      <Input
                        size="large"
                        placeholder="Enter DOB"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            dob: e,
                          })
                        }
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={onFinish}>
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
