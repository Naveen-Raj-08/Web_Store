import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { index } from "./components";
import { Products } from "./components/Products";
import { Booking } from "./components/Booking";

export const App = () => {
  return (
    <>
      <Route exact path="/" component={index} />
      <Route path="/Home" component={index} />
      <Route path="/Products" component={Products} />
      <Route path="/Booking" component={Booking} />
    </>
  );
};
