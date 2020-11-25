import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import { index } from "./components";
import { Products } from "./components/Products";
import { Booking } from "./components/Booking";
import { Cart } from "./components/Cart";

export const App = () => {
  return (
    <>
      <Route exact path="/" component={index} />
      <Route path="/Home" component={index} />
      <Route path="/Products" component={Products} />
      <Route path="/Booking" component={Booking} />
      <Route path="/Cart" component={Cart} />
    </>
  );
};
