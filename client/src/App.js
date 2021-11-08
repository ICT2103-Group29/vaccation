import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import searchFlights from "./components/Flight/SearchFlights";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/searchFlights" component={searchFlights} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/passengerDetails" component={PassengerDetails} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
