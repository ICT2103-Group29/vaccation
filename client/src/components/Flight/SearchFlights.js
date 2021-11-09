import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import CardGradient from "../Shared/CardGradient";
import { Button, InputNumber, Form, Select, DatePicker } from "antd";
import "../../assets/css/button.css";
import { getCountries } from "../../api";
import { fetchFlights } from "../../api";

import moment from "moment";

function SearchFlights() {
  const [data, setData] = useState({
    //can be any variable name
    countriesInfo: {
      countries: "",
    },
    loading: true,
  });

  const getCountriesInfo = async () => {
    let countries;
    const res1 = await getCountries();
    //retrieve countries names
    if ((res1.status = 200)) {
      // countries = res1.map(data?.country_name)
      countries = res1.data;
    }

    setData({
      countriesInfo: {
        countries,
      },
      loading: false,
    });
  };

  useEffect(() => {
    getCountriesInfo();
  }, []);

  //Get form data
  const [postData, setPostData] = useState({
    originplace: "",
    destinationplace: "",
    adults: "",
    outbounddate: "",
    inbounddate: "",
  });

  const createSession = async () => {
    let session;
    alert("test 1");

    const res1 = await fetchFlights();
    console.log(res1);

    if ((res1.status = 200)) {
      alert("test 2");

      session = res1.data;
      alert.log(session);
      alert(session.originplace);
    }
    setData({
      originplace: session.originplace,
      // destinationplace: "",
      // adults: "",
      // outbounddate: "",
      // inbounddate: "",
    });
  };

  useEffect(() => {
    createSession();
  }, []);

  const clear = () => {
    setPostData({
      originplace: "",
      destinationplace: "",
      adults: "",
      outbounddate: "",
      inbounddate: "",
    });
  };

  const links = [
    {
      to: "/booking",
      name: "Booking",
    },
    {
      to: "/travelRestrictions",
      name: "Travel Restrictions",
    },
    {
      to: "/PCRClinics",
      name: "Pre-Departure COVID Test",
    },
  ];
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  const onFinish = (e) => {
    console.log("Success:", e);
    clear();
  };

  return (
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
        Plan Ahead and Book with Confidence
      </h1>

      <LargeCard>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div class="font-bold ">
            <div class=" ">
              {!data.loading && (
                <Fragment>
                  <Form.Item
                    label="Where From "
                    name="originplace"
                    rules={[
                      {
                        required: true,
                        message: "Please select country!",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          originplace: e,
                        })
                      }
                    >
                      {data.countriesInfo.countries.map((country) => (
                        <Select.Option
                          name="countrySelectedFrom"
                          value={country.iso}
                        >
                          {country.country_name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Where To"
                    name="destinationplace"
                    rules={[
                      {
                        required: true,
                        message: "Please select country!",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          destinationplace: e,
                        })
                      }
                    >
                      {data.countriesInfo.countries.map((country) => (
                        <Select.Option
                          name="countrySelectedTo"
                          value={country.iso}
                        >
                          {country.country_name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="No of Passengers"
                    name="adults"
                    rules={[
                      {
                        required: true,
                        message: "Please select number of passengers!",
                      },
                    ]}
                  >
                    <InputNumber
                      min={1}
                      max={10}
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          adults: e,
                        })
                      }
                    ></InputNumber>
                  </Form.Item>
                </Fragment>
              )}
            </div>
            <div class="">
              <Form.Item
                name="departureDate"
                label="Departure Date"
                rules={[
                  {
                    required: true,
                    message: "Please select departure date!",
                  },
                ]}
              >
                <DatePicker
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      outbounddate: e,
                    })
                  }
                  disabledDate={disabledDate}
                />
              </Form.Item>
              <Form.Item
                label="Arrival Date"
                name="arrivalDate"
                rules={[
                  {
                    required: true,
                    message: "Please select arrival date!",
                  },
                ]}
              >
                <DatePicker
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      inbounddate: e,
                    })
                  }
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={clear}>
                Search Flights
              </Button>
            </Form.Item>
          </div>
        </Form>
      </LargeCard>
      <div class="flex  mt-32 m-auto w-11/12 ">
        {links.map((link) => (
          <CardGradient>
            <Link to={link.to}>{link.name}</Link>
          </CardGradient>
        ))}
      </div>
    </div>
  );
}

export default SearchFlights;
