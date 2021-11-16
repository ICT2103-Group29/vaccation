// export default SearchFlights;
import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import CardGradient from "../Shared/CardGradient";
import { Button, InputNumber, Form, Select, DatePicker } from "antd";
import "../../assets/css/button.css";
import { getCountries, createSession, places } from "../../api";
import moment from "moment";

function SearchFlights() {
  //get country data
  const [data, setData] = useState({
    //can be any variable name
    countriesInfo: {
      countries: "",
    },
    loading: true,
  });

  //get form data
  const [postData, setPostData] = useState({
    originplace: "SIN-sky",
    destinationplace: "NYCA-sky",
    outbounddate: "2021-11-16",
    inbounddate: "2021-11-25",
    adults: "",
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

  const [place, setPlace] = useState("");

  //to find placeid (airport) with country
  const findPlaces = async (e) => {
    console.log("Success data:", e);

    const res1 = await places(place);
    if (res1.status == 200) {
      console.log("status 200");
    } else {
      console.log("res1", res1.status);
    }

    setPlace(place);
    console.log("place", place);
  };

  //sky scanner api
  const createSkySession = async (e) => {
    e.preventDefault();
    console.log("Success data:", e);

    // clear();
    let data = {
      originplace: postData.originplace,
      destinationplace: postData.destinationplace,
      outbounddate: postData.outbounddate,
      inbounddate: postData.inbounddate,
      adults: postData.adults,
    };
    const res1 = await createSession(data);
    console.log(res1.status);
    if (res1.status == 200) {
      console.log("status 200");
    } else {
      console.log("res1", res1.status);
    }

    setPostData({
      originplace: data.originplace,
      destinationplace: data.destinationplace,
      outbounddate: data.outbounddate,
      inbounddate: data.inbounddate,
      adults: data.adults,
    });
  };

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

    findPlaces();
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
  const dateFormatList = ["YYYY/MM/DD", "YYYY/MM/DD"];

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
                    name="originplace"
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
                      onChange={((e) => setPlace(e), findPlaces)}
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
                    name="destinationplace"
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
                      onChange={((e) => setPlace(e), findPlaces)}
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
                name="outbounddate"
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
                  format={dateFormatList}
                />
              </Form.Item>
              <Form.Item
                name="inbounddate"
                label="Arrival Date"
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
              <Button type="primary" htmlType="submit" onClick={createSession}>
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
