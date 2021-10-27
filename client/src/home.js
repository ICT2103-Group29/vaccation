import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div class="flex justify-center items-center h-screen">
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default Home;
