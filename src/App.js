import React, {useState} from "react";
import "./App.css";
import Home from "./Components/Home.js";
import { Route, Link } from "react-router-dom";
import Header from "./Components/Header.js";
import Pizza from "./Components/Pizza.js";
import OnWay from "./Components/OnWay.js";

const App = () => {
  const [pizza, setPizza] = useState({
    size: "",
    sauce: "",
    pepperoni: "",
    sausage: "",
    pineapple: "",
    bacon: "",
    glutenFree:"",
    special: "none",
    name: ""
  })

  return (
    <div>
      <Header />
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/pizza">
      <Pizza pizza={pizza} setPizza={setPizza}/>
      </Route>
      <Route path ="/pizza/onway">
      <OnWay pizza={pizza}/>
      </Route>
    </div>
  );
};
export default App;
