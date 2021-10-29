import "./App.css";
import Navbar from "./components/navbar";

import Home from "./home";
import searchFlights from "./searchFlights";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";

function App() {
  return (
    <div class="h-full bg-gray-100">
      <Navbar> </Navbar>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>

      <Router>
        <Switch>
          <Route exact path="/searchFlights" component={searchFlights} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
