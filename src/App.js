import React from "react";
import "./App.css";
import Home from "./Components/Home.js";
import { Route, Link } from "react-router-dom";
import Header from "./Components/Header.js";
import Pizza from "./Components/Pizza.js";

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/pizza">
      <Pizza />
      </Route>
    </div>
  );
};
export default App;
