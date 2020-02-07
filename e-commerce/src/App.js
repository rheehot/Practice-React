import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const PlayStationPage = () => (
  <div>
    <h1> PlayStation Page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/playstation' component={PlayStationPage} />
      </Switch>
    </div>
  );
}

export default App;
