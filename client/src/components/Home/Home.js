import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../Shared/Card";
import CardGradient from "../Shared/CardGradient";
import TableData from "../Shared/Table";
import "../../assets/css/font.css";
import CountUp from "react-countup";
import {
  getOpenCountries,
  getWorldWideVaccPercent,
  getVaccData,
} from "../../api";
import HowToNavigate from "../HowToNavigate/HowToNavigate";

const cardDetails = [
  { id: 1, name: "Open with Restrictions", data: "200" },
  { id: 2, name: "Worldwide Vaccination", data: "60%" },
];

const cardTypes = [
  { id: 1, name: "Book a Flight", link: "/booking" },
  { id: 2, name: "Travel Restrictions", link: "/travelRestrictions" },
  { id: 3, name: "Pre-Departure COVID Test", link: "/PCRClinics" },
  { id: 3, name: "How To Navigate Vaccation", link: "/HowToNavigate" },
];

function Home() {
  // How data object is structured
  const [data, setData] = useState({
    stats: {
      open: "",
      worldwide: "",
    },
    vaccRate: [],
    loading: true,
  });

  /* Helper function to separate numbers by commas */
  const getNumberCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Define vaccination rate table columns
  const tableColumns = [
    {
      title: "Country",
      dataIndex: "country_name",
      width: 150,
      sorter: (a, b) => a.country_name.localeCompare(b.country_name),
    },
    {
      title: "Total Vaccinated",
      dataIndex: "total_vacc",
      width: 120,
      sorter: (a, b) => a.total_vacc - b.total_vacc,
      render: (text) => {
        return <span>{getNumberCommas(text)}</span>;
      },
    },
    {
      title: "Total Fully Vaccinated",
      dataIndex: "total_fully_vacc",
      width: 100,
      sorter: (a, b) => a.total_fully_vacc - b.total_fully_vacc,
      render: (text) => {
        return <span>{getNumberCommas(text)}</span>;
      },
    },
  ];

  /* Retrieve open with restrictions and worldwide vacc rate*/
  const getStats = async () => {
    let open, percent;

    const res1 = await getOpenCountries();
    if (res1.status === 200) {
      open = res1.data?.open;
    }

    const res2 = await getWorldWideVaccPercent();
    if (res2.status === 200) {
      percent = res2.data?.vaccPercent;
    }

    // Update state
    setData((prevState) => {
      return {
        ...prevState,
        stats: {
          open: open,
          worldwide: percent,
        },
      };
    });
  };

  /* Retrieve data for vacc rate table */
  const getVaccRate = async () => {
    const res = await getVaccData();

    // Update state
    setData((prevState) => ({
      ...prevState,
      vaccRate: res.data,
    }));
  };

  useEffect(() => {
    getStats();
    getVaccRate();
    // Update loading to false
    setData((prevState) => ({
      ...prevState,
      loading: false,
    }));
  }, []);

  return (
    <div id="home">
      <div className="m-24 ">
        <h1 className="font-bold text-4xl mt-20 text-center">
          Numbers at a Glance
        </h1>
        <div className="flex justify-center items-center m-6 ">
          {!data.loading && (
            <Fragment>
              <Card>
                <p className="font-bold text-2xl mb-2">
                  Countries
                  <br /> Open with Restrictions
                </p>
                <CountUp
                  className="text-6xl font-black text-blue-800"
                  start={parseInt(data.stats.open) - 10}
                  end={parseInt(data.stats.open)}
                  duration={1.7}
                />
              </Card>
              <Card>
                <p className="font-bold text-2xl mb-2">Worldwide Vaccination</p>
                <CountUp
                  className="text-6xl font-black text-blue-800"
                  start={parseFloat(data.stats.worldwide) - 10}
                  end={parseFloat(data.stats.worldwide)}
                  duration={1.5}
                  decimals={2}
                  suffix="%"
                />
              </Card>
            </Fragment>
          )}
        </div>
        <h1 className="font-bold text-4xl mt-20 text-center">
          Global COVID-19 Vaccination Rate
        </h1>
        <div class="rounded shadow-md h-auto text-center p-4 bg-white">
          <TableData columns={tableColumns} data={data.vaccRate} />
        </div>
      </div>
      <div className="flex items-center m-6 ">
        <HowToNavigate />
      </div>
    </div>
  );
}

export default Home;
