import React from "react";
import Card from "../Shared/Card";
import CardGradient from "../Shared/CardGradient";
import TableData from "./Table";
import Banner from "./Banner";
import "../../assets/css/font.css";

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
  return (
    <div id="home">
      <div className="m-24 ">
        <h2 className="font-bold text-5xl text-center">Numbers at a Glance</h2>
        <div className="flex justify-center items-center m-6 ">
          {cardDetails.map((item) => (
            <Card>
              <p className="font-bold text-2xl mb-2" key={item.id}>
                {item.name}
              </p>
              <p
                className="text-gray-700 text-6xl font-black text-blue-800"
                key={item.id}
              >
                {item.data}
              </p>
            </Card>
          ))}
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
