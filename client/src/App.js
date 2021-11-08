import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SearchFlights from "./components/Flight/SearchFlights";
import Results from "./components/Flight/Results";
import PassengerDetails from "./components/Flight/PassengerDetails";
import Payment from "./components/Flight/Payment";
import Footer from "./components/Footer/Footer";
import "./assets/css/font.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div class="h-full bg-gray-100 ">
      <Router>
        <Navbar />
        <Switch>
          <Route exact key="home" path="/" exact component={Home} />

          <Route
            exact
            key="booking"
            path="/booking"
            exact
            component={SearchFlights}
          />
          <Route
            exact
            key="results"
            path="/results"
            exact
            component={Results}
          />
          <Route
            exact
            key="passengerDetails"
            path="/passengerDetails"
            exact
            component={PassengerDetails}
          />
          <Route
            exact
            key="payment"
            path="/payment"
            exact
            component={Payment}
          />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
