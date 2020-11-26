import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import { index } from "./components";
import Cart from "./components/Cart";
import ShopProduct from "./components/ShopProduct";

export const App = () => {
  return (
    <>
      <Route exact path="/" component={index} />
      <Route path="/Shop-Product" component={ShopProduct} />
      <Route path="/Cart" component={Cart} />
    </>
  );
};
