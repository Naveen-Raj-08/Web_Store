import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";
import ProductData from "./Data";
import { Card } from "./Card";
import { addToCart } from "../Actions/Action";

const ShopProduct = (props) => {
  let Data = ProductData.Items;

  const dispatch = useDispatch();
  dispatch(addToCart(props.Items));

  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="container">
        <div className="heading">
          <h2>Product List</h2>
        </div>
        <div className="Items">
          {Data.map((item) => (
            <Card Values={item} key={item.id} ItemToCart={addToCart} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ShopProduct;
