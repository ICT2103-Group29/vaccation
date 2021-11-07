import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import CardGradient from "../Shared/CardGradient";
import { Button, InputNumber } from "antd";
import "../../assets/css/button.css";
import { getCountries, getOpenCountries } from "../../api";

import { Form, Select, DatePicker } from "antd";
import moment from "moment";

function SearchFlights(props) {
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

  //get form data
  const [postData, setPostData] = useState({
    countryFrom: "",
    countryTo: "",
    noOfPassengers: "",
    departureDate: "",
    arrivalDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    clear();
  };

  const clear = () => {
    setPostData({
      countryFrom: "",
      countryTo: "",
      noOfPassengers: "",
      departureDate: "",
      arrivalDate: "",
    });
  };

  const cardTypes = [
    { id: 1, name: "Booking" },
    { id: 2, name: "Travel Restrictions" },
    { id: 3, name: "Pre-Departure COVID Test" },
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
        <Form layout="vertical" onSubmit={handleSubmit}>
          <div class="font-bold ">
            <div class=" ">
              {!data.loading && (
                <Fragment>
                  <Form.Item label="Where From ">
                    <Select
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          countryFrom: e,
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
                  <Form.Item label="Where To">
                    <Select
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          countryTo: e,
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
                  <Form.Item label="No of Passengers">
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
              <Form.Item label="Departure Date">
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
              <Form.Item label="Arrival Date">
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
            <Link to="/results">
              <Button type="primary" onClick={clear}>
                Search Flights
              </Button>
            </Link>
          </div>
        </Form>
      </LargeCard>
      <div class="flex justify-around  mt-32 m-auto w-11/12">
        {cardTypes.map((item) => (
          <CardGradient>
            <p>{item.name}</p>
          </CardGradient>
        ))}
      </div>
    </div>
  );
}

export default SearchFlights;
