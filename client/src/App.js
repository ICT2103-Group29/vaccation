import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./home";
import searchFlights from "./searchFlights";
import Results from "./results";
import PassengerDetails from "./passengerDetails";
import Payment from "./payment";
import Footer from "./components/footer";
import "./assets/font.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div class="h-full bg-gray-100 ">
      <Navbar> </Navbar>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/searchFlights" component={searchFlights} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/passengerDetails" component={PassengerDetails} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
