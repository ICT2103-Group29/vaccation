import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import CardGradient from "./components/cardGradient";
import TableData from "./components/table";
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
    <div class="h-full ">
      <Navbar></Navbar>
      <div class="m-24 ">
        <h2 class="font-bold text-5xl text-center">Numbers at a Glance</h2>
        <div class="flex justify-center items-center m-6 ">
          {cardDetails.map((item) => (
            <Card>
              <p class="font-bold text-2xl mb-2" key={item.id}>
                {item.name}
              </p>
              <p
                class="text-gray-700 text-6xl font-black text-blue-800"
                key={item.id}
              >
                {item.data}
              </p>
            </Card>
          ))}
        </div>
        <TableData></TableData>
      </div>
      <div class="flex justify-center items-center m-6">
        {cardTypes.map((item) => (
          <CardGradient>
            <p>{item.name}</p>
          </CardGradient>
        ))}
      </div>
    </div>
  );
}

export default Home;
