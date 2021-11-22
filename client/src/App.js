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
import PCRClinics from "./components/PCRclinic/PCRClinics";
import HowToNavigate from "./components/HowToNavigate/HowToNavigate";
/*import TravelRestrictions from "./components/TravelRestrictions/TravelRestrictions";
import TravelRestrictionsFull from "./components/TravelRestrictions/TravelRestrictionsFull";*/
import TravelRestrictions from "./components/Restrictions/TravelRestrictions";
import ScrollToTop from "./components/Shared/ScrollToTop";

function App() {
  return (
    <div class="h-full bg-gray-50">
      <Router>
        <Navbar />
        <div className="px-6">
          <ScrollToTop />
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

            <Route exact path="/PCRClinics" component={PCRClinics} />
            <Route exact path="/HowToNavigate" component={HowToNavigate} />
            <Route
              exact
              path="/TravelRestrictions"
              component={TravelRestrictions}
            />
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
