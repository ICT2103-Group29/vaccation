import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import CardGradient from "./components/cardGradient";
import TableData from "./components/table";
import Banner from "./components/banner";
import Footer from "./components/footer";

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
    <div class="h-full bg-gray-100">
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
      <div class="pb-48">
        <Banner>
          <div>
            <p>What Vaccation Provides</p>
            <p>Here are the following steps you can follow:</p>
          </div>
        </Banner>
        <div class="flex  items-center m-6  ">
          {cardTypes.map((item) => (
            <CardGradient>
              <p>{item.name}</p>
            </CardGradient>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
