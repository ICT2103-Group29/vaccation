import React, { useEffect, useState, Fragment } from "react";
import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";
import CardGradient from "../Shared/CardGradient";
import { Button, InputNumber } from "antd";
import "../../assets/css/button.css";
import { getCountries, getOpenCountries } from "../../api";

import { Form, Select, DatePicker } from "antd";

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

  const [formData, updateFormData] = useState({
    countryFromSelected: "",
    countryToSelected: "",
  });

  const handleSubmit = () => {
    console.log(formData);
    alert(formData);
  };

  useEffect(() => {
    updateFormData((prevState) => ({
      ...prevState,
      loading: false,
    }));
  }, []);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const cardTypes = [
    { id: 1, name: "Booking" },
    { id: 2, name: "Travel Restrictions" },
    { id: 3, name: "Pre-Departure COVID Test" },
  ];
  return (
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
        Plan Ahead and Book with Confidence
      </h1>

      <LargeCard>
        <Form layout="vertical">
          <div class="font-bold ">
            <div class=" ">
              {!data.loading && (
                <Fragment>
                  <Form.Item label="Where From ">
                    <Select>
                      {data.countriesInfo.countries.map((country) => (
                        <Select.Option
                          name="countrySelectedFrom"
                          value={country.iso}
                          onChange={(e) =>
                            updateFormData({
                              ...formData,
                              countrySelectedFrom: e.target.value,
                            })
                          }
                        >
                          {country.country_name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Where To">
                    <Select>
                      {data.countriesInfo.countries.map((country) => (
                        <Select.Option
                          name="countrySelectedTo"
                          value={country.iso}
                          onChange={(e) =>
                            updateFormData({
                              ...formData,
                              countrySelectedTo: e.target.value,
                            })
                          }
                        >
                          {country.country_name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  {/* <Form.Item label="No of Passengers">
                    <InputNumber min={1} max={10}></InputNumber>
                  </Form.Item> */}
                </Fragment>
              )}
            </div>
            {/* <div class="">
              <Form.Item label="Departure Date">
                <DatePicker onChange={onChange} />
              </Form.Item>
              <Form.Item label="Arrival Date">
                <DatePicker onChange={onChange} />
              </Form.Item>
            </div> */}
            <Button type="primary" onClick={handleSubmit}>
              Search Flights
            </Button>
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
