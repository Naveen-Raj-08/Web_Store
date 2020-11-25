import React from "react";
import MaterialIcon from "material-icons-react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import Product from "../images/Champagne.png";
import { ProductTab } from "./Tabs";
import { ProductCarousel } from "./ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "./Redux/Action";

const HR = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.2,
    }}
  />
);
export const Products = () => {
  var History = useHistory();
  const value = useSelector((state) => state);
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(ADD());
    History.push("/Cart");
  };

  return (
    <div>
      <div>
        <Header />
        <NavigationBar Value={value} />
        <div className="container">
          <div className="product-item">
            <div className="product-image">
              <img src={Product} alt="Items" />
            </div>
            <div className="item-details">
              <div>
                <h4>Champagne</h4>
              </div>
              <div className="product_details">
                <span>
                  <MaterialIcon icon="star_rate" size="small" />
                  <MaterialIcon icon="star_rate" size="small" />
                  <MaterialIcon icon="star_half" size="small" />
                  <MaterialIcon icon="star_border" size="small" />
                </span>
                <br />
                <a id="Rating" href="#">
                  4.5 out of 5.0 review
                </a>
                <div>
                  <input type="radio" name="size" />
                  <label htmlFor="size">
                    750.0ml bottle - <strong>from $300.49</strong>
                  </label>
                </div>
                <HR color="lightgray" />
                <div>
                  <input type="radio" name="size" />
                  <label htmlFor="size">
                    300.0ml bottle - <strong>from $100.49</strong>
                  </label>
                </div>
                <HR color="lightgray" />
                <div>
                  <input type="radio" name="size" />
                  <label htmlFor="size">
                    500.0ml bottle - <strong>from $250.49</strong>
                  </label>
                </div>
                <button onClick={AddToCart} className="btn">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <HR color="lightgray" />
          <ProductCarousel />
          <ProductTab />
        </div>
        <Footer />
      </div>
    </div>
  );
};
