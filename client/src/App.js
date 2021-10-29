import "./App.css";
import Navbar from "./components/navbar";
import Home from "./home";
import searchFlights from "./searchFlights";
import Footer from "./components/footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./assets/font.css";

function App() {
  return (
    <div class="h-full bg-gray-100 ">
      <Navbar> </Navbar>
      <Router>
        <Switch>
          <Route exact path="" component={Home} />
        </Switch>
      </Router>

      <Router>
        <Switch>
          <Route exact path="/searchFlights" component={searchFlights} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
