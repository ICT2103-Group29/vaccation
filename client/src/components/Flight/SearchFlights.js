// export default SearchFlights;
import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import CardGradient from "../Shared/CardGradient";
import { Button, InputNumber, Form, Select, DatePicker } from "antd";
import "../../assets/css/button.css";
import { getCountries, createSession } from "../../api";
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

  //sky scanner api
  const createSkySession = async (e) => {
    e.preventDefault();
    console.log("Success data:", e);

    // clear();
    let data = {
      originplace: "SIN",
      destinationplace: "HKG",
      outbounddate: postData.departureDate,
      inbounddate: postData.arrivalDate,
      adults: "2",
    };
    const res1 = await createSession(
      data.originplace,
      data.destinationplace,
      data.outbounddate,
      data.inbounddate,
      data.adults
    );
    if (res1 == 200) {
      console.log("status 200");
    }
  };

  // const onFinish = (e) => {
  //   console.log("Success:", e);
  //   clear();
  // };

  //get form data
  const [postData, setPostData] = useState({
    countryFrom: "",
    countryTo: "",
    noOfPassengers: "",
    departureDate: "",
    arrivalDate: "",
  });

  // const clear = () => {
  //   setPostData({
  //     countryFrom: "",
  //     countryTo: "",
  //     noOfPassengers: "",
  //     departureDate: "",
  //     arrivalDate: "",
  //   });
  // };
  useEffect(() => {
    getCountriesInfo();
    createSession();
  }, []);

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
          onFinish={createSession}
        >
          <div class="font-bold ">
            <div class=" ">
              {!data.loading && (
                <Fragment>
                  <Form.Item
                    label="Where From "
                    name="countryFrom"
                    rules={[
                      {
                        required: true,
                        message: "Please select country!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      optionFilterProp="children"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          countryFrom: e,
                        })
                      }
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
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
                    name="countryTo"
                    rules={[
                      {
                        required: true,
                        message: "Please select country!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      optionFilterProp="children"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          countryTo: e,
                        })
                      }
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
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
                    name="noOfPassengers"
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
                          noOfPassengers: e,
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
                      departureDate: e,
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
                      arrivalDate: e,
                    })
                  }
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={createSkySession}
              >
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
