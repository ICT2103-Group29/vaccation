import React, { useEffect, useState, Fragment } from "react";
import Card from "../Shared/Card";
import CardGradient from "../Shared/CardGradient";
import TableData from "./Table";
import Banner from "./Banner";
import "../../assets/css/font.css";
import { getOpenCountries, getWorldWideVaccPercent } from "../../api";

const cardDetails = [
  { id: 1, name: "Open with Restrictions", data: "200" },
  { id: 2, name: "Worldwide Vaccination", data: "60%" },
];

const cardTypes = [
  { id: 1, name: "Book a Flight" },
  { id: 2, name: "Travel Restrictions" },
  { id: 3, name: "Pre-Departure COVID Test" },
];

function Home() {
  const [data, setData] = useState({
    stats: {
      open: "",
      worldwide: "",
    },
    loading: true,
  });

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

    setData({
      stats: {
        open,
        worldwide: percent,
      },
      loading: false,
    });
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div id="home">
      <div className="m-24 ">
        <h2 className="font-bold text-5xl text-center">Numbers at a Glance</h2>
        <div className="flex justify-center items-center m-6 ">
          {!data.loading && (
            <Fragment>
              <Card>
                <p className="font-bold text-2xl mb-2">
                  Open with Restrictions
                </p>
                <p className="text-gray-700 text-6xl font-black text-blue-800">
                  {data.stats.open}
                </p>
              </Card>
              <Card>
                <p className="font-bold text-2xl mb-2">Worldwide Vaccination</p>
                <p className="text-gray-700 text-6xl font-black text-blue-800">
                  {data.stats.worldwide}
                </p>
              </Card>
            </Fragment>
          )}
        </div>
        <Card>
          <h2 className="text-2xl font-bold text-left ">
            Global COVID-19 Vaccination Rate
          </h2>
          <TableData />
        </Card>
      </div>
      <div className="pb-48">
        <div className="flex  items-center m-6  ">
          {cardTypes.map((item) => (
            <CardGradient>
              <p>{item.name}</p>
            </CardGradient>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
